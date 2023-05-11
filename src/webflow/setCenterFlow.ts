import { Center } from '../types/webflow';
import getEvent from './getEvent';
import { getCarousel } from './getCarousel';
import getCenter from './getCenter';
import getCenterPrograms from '../templates/nashville';
import Collections from '../templates/allCollections';


require('dotenv').config();

// TO USE THIS SCRIPT:
// 1. Set the centerName, address, centerID, and hubspotFormID variables below.
// 2. Run the script with the command `node setCenterFlow.js`.
// 3. If the script fails, check the console output for error messages.

const centerCollectionId = Collections.filter(c => c.name === 'Centers')[0]._id;
const centerProgramsID = Collections.filter(c => c.name === 'Center Programs')[0]._id;
const centerEventsID = Collections.filter(c => c.name === 'Events')[0]._id;

/**
 * Sends a POST request to the Webflow API to create an item in a collection.
 * @param collectionId - ID of the target collection.
 * @param fields - Object containing field names and values.
 * @returns Promise that resolves with the server response or rejects with an error.
 */
const setItem = async (collectionId: string, fields: any) => {
  const url = `https://api.webflow.com/collections/${collectionId}/items`;
  const headers = {
    accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.WEBFLOW_API_KEY}`,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({ fields }),
    });
    console.log('webflow set response: ', JSON.stringify(await response.json()))

    if (response && response.status === 200) return response;
    else {
      throw new Error(
        `Error setting item: ${response.status} ${response.statusText}`,
      );
    }

  } catch (error) {
    console.error('Error setting item: ', error.message);
  }
};

/**
 * Sends a POST request to the Webflow API to create a center item.
 * @param centerName - Name of the center to create.
 * @param address - Address of the center to create.
 * @returns Promise that resolves with the server response or rejects with an error.
 */
const setCenter = async (center: Center) => {
  const fields = getCenter(center);
  return setItem(centerCollectionId, fields);
};

/**
 * Sends a POST request to the Webflow API to create an event item.
 * @param centerName - Name of the center associated with the event.
 * @param hubspotFormID - ID of the HubSpot form associated with the event.
 * @param centerID - ID of the center associated with the event, or null if not available.
 * @returns Promise that resolves with the server response or rejects with an error.
 */
export const setEvent = async (
  center: Center,
  centerID: string
) => {
  console.log('starting')
  try {
    const fields = getEvent(center, centerID);
    return setItem(centerEventsID, fields);
  } catch (event) {
    console.error('error setting event: ', JSON.stringify(event.response.data));
  }
};

/**
 * Sends a POST request to the Webflow API to create a center carousel item.
 * @param  centerName - Name of the center associated with the carousel.
 * @returns Promise that resolves with the server response or rejects with an error.
 */
const setCenterCarousel = async (centerName: string) => {
  try {
    const collectionId = '64492d7ee2522e32452b51c3';
    const fields = getCarousel(centerName);
    return setItem(collectionId, fields);
  } catch (event) {
    console.error('error setting event: ', JSON.stringify(event.response.data));
  }
};

/**
 * Sends multiple POST requests to the Webflow API to create program items for a center.
 * @param  centerName - Name of the center associated with the programs.
 * @returns Promise that resolves with an array of server responses or rejects with an error.
 */
const setCenterPrograms = async (center: Center) => {
  console.info('template: ', center.template);

  let programs = getCenterPrograms(center);

  // switch (template) {
  //   case 'nashville':
  //     break;
  //   default:
  //     programs = getDefaultPrograms(centerName, centerProgramsID);
  // }

  const promises = programs.map((program: any, i: number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setItem(centerProgramsID, program)
          .then((response: any) => resolve(response.data))
          .catch((error: { response: { data: any } }) =>
            reject(error.response.data),
          );
      }, 500 * i);
    });
  });
  return Promise.all(promises);
};

function errorHandler(error: any) {
  console.error(JSON.stringify(error.response.data));
}

/**

Main function that executes the setCenter, setCenterPrograms, setEvent, and setCenterCarousel functions in sequence.
@async
@returns {void}
*/
async function setNewCenter(center: Center): Promise<void> {
  try {
    const centerResponse: any = await setCenter(center);
    console.info(
      'center set successful with id: ',
      JSON.stringify(centerResponse._id),
    );

    // update the states collection with the center id
    const centerID = centerResponse._id;
    console.info('setting programs')
    await setCenterPrograms(center);
    console.info('done setting programs')

    await setEvent(center, centerID);
    await setCenterCarousel(center.name);

    console.info(`all done! ${center.name} is ready to go!`);
  } catch (error) {
    errorHandler(error);
  }
}

export default setNewCenter;
