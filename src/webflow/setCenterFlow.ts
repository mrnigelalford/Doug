import { Center } from '../types/webflow';
import { getCenterPrograms } from './template_centerPrograms';
import { getEvent } from './getEvent';
import { getCarousel } from './getCarousel';
import { getCenter } from './getCenter';

require('dotenv').config();

// TO USE THIS SCRIPT:
// 1. Set the centerName, address, centerID, and hubspotFormID variables below.
// 2. Run the script with the command `node setCenterFlow.js`.
// 3. If the script fails, check the console output for error messages.

const centerCollectionId = '64492d7ee2522e3a782b51be';

/**
 * Sends a POST request to the Webflow API to create an item in a collection.
 * @param collectionId - ID of the target collection.
 * @param fields - Object containing field names and values.
 * @returns Promise that resolves with the server response or rejects with an error.
 */
const setItem = async (collectionId: string, fields: any) => {
  console.info('setting with webflow api key: ', process.env.WEBFLOW_API_KEY);
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
    if (response.ok) {
      return response.json();
    } else {
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
const setCenter = async (centerName: String, address: String) => {
  const collectionId = centerCollectionId;
  const fields = getCenter(centerName, address);
  return setItem(collectionId, fields);
};

/**
 * Sends a POST request to the Webflow API to create an event item.
 * @param centerName - Name of the center associated with the event.
 * @param hubspotFormID - ID of the HubSpot form associated with the event.
 * @param centerID - ID of the center associated with the event, or null if not available.
 * @returns Promise that resolves with the server response or rejects with an error.
 */
const setEvent = async (
  centerName: String,
  hubspotFormID: String,
  centerID: String,
) => {
  try {
    const collectionId = '64492d7ee2522e284a2b51cd';
    const fields = getEvent(centerName, hubspotFormID, centerID || '');
    return setItem(collectionId, fields);
  } catch (event) {
    console.error('error setting event: ', JSON.stringify(event.response.data));
  }
};

/**
 * Sends a POST request to the Webflow API to create a center carousel item.
 * @param  centerName - Name of the center associated with the carousel.
 * @returns Promise that resolves with the server response or rejects with an error.
 */
const setCenterCarousel = async (centerName: String) => {
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
const setCenterPrograms = async (centerName: String) => {
  const collectionId = '64492d7ee2522e4b272b51c9';
  const programs = getCenterPrograms(centerName);
  const promises = programs.map((program: any, i: number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setItem(collectionId, program)
          .then((response: { data: any }) => resolve(response.data))
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
async function main(center: Center): Promise<void> {
  console.debug('center input: ', JSON.stringify(center));
  const centerResponse = await setCenter(center.name, center.address).catch(
    errorHandler,
  );
  console.info('center response: ', JSON.stringify(await centerResponse));
  const centerID = centerResponse.data._id;
  await setCenterPrograms(center.name).catch(errorHandler);
  await setEvent(center.name, center.hubspotFormID, centerID).catch(
    errorHandler,
  );
  await setCenterCarousel(center.name).catch(errorHandler);
  console.info(`all done! ${center.name} is ready to go!`);
}

export default main;