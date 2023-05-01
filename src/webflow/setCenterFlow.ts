import { Center } from '../types/webflow';

require('dotenv').config();
const axios = require('axios');
const { getCenterPrograms } = require('./template_centerPrograms');
const { getEvent } = require('./getEvent');
const { getCarousel } = require('./getCarousel');
const { getCenter } = require('./getCenter');

// TO USE THIS SCRIPT:
// 1. Set the centerName, address, centerID, and hubspotFormID variables below.
// 2. Run the script with the command `node setCenterFlow.js`.
// 3. If the script fails, check the console output for error messages.

const inputs = {
  address: '3601 W. 145th St. Burnsville, MN',
  centerName: 'Burnsville',
  centerID: '001', // get this from the center slug
  hubspotFormID: 'a0f0b0c0-d0e0-0000-0000-000000000000', // get this from the hubspot form
};

/**
 * Configuration object for axios requests.
 * @constant {Object}
 * @property {Object} headers - Request headers.
 * @property {string} headers.accept - Requested response format.
 * @property {string} headers.content-type - Request payload format.
 * @property {string} headers.authorization - Webflow API key.
 */
const axiosConfig = {
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: process.env.WEBFLOW_API_KEY,
  },
};

/**
 * Sends a POST request to the Webflow API to create an item in a collection.
 * @param {string} collectionId - ID of the target collection.
 * @param {Object} fields - Object containing field names and values.
 * @returns {Promise} Promise that resolves with the server response or rejects with an error.
 */
const setItem = (collectionId: String, fields: any) => {
  return axios.post(
    `https://api.webflow.com/collections/${collectionId}/items`,
    {
      fields,
    },
    axiosConfig,
  );
};

/**
 * Sends a POST request to the Webflow API to create a center item.
 * @param {string} centerName - Name of the center to create.
 * @param {string} address - Address of the center to create.
 * @returns {Promise} Promise that resolves with the server response or rejects with an error.
 */
const setCenter = (centerName: String, address: String) => {
  const collectionId = '64492d7ee2522e3a782b51be';
  const fields = getCenter(centerName, address);
  return setItem(collectionId, fields);
};

/**
 * Sends a POST request to the Webflow API to create an event item.
 * @param {string} centerName - Name of the center associated with the event.
 * @param {string} hubspotFormID - ID of the HubSpot form associated with the event.
 * @param {string|null} centerID - ID of the center associated with the event, or null if not available.
 * @returns {Promise} Promise that resolves with the server response or rejects with an error.
 */
const setEvent = (
  centerName: String,
  hubspotFormID: String,
  centerID: String,
) => {
  const collectionId = '64492d7ee2522e284a2b51cd';
  const fields = getEvent(centerName, hubspotFormID, centerID || '');
  return setItem(collectionId, fields);
};

/**
 * Sends a POST request to the Webflow API to create a center carousel item.
 * @param {string} centerName - Name of the center associated with the carousel.
 * @returns {Promise} Promise that resolves with the server response or rejects with an error.
 */
const setCenterCarousel = (centerName: String) => {
  const collectionId = '64492d7ee2522e32452b51c3';
  const fields = getCarousel(centerName);
  return setItem(collectionId, fields);
};

/**
 * Sends multiple POST requests to the Webflow API to create program items for a center.
 * @param {string} centerName - Name of the center associated with the programs.
 * @returns {Promise} Promise that resolves with an array of server responses or rejects with an error.
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
  console.info('center response: ', JSON.stringify(centerResponse));
  const centerID = centerResponse.data._id;
  await setCenterPrograms(center.name).catch(errorHandler);
  await setEvent(center.name, center.hubspotFormID, centerID).catch(
    errorHandler,
  );
  await setCenterCarousel(center.name).catch(errorHandler);
  console.info(`all done! ${center.name} is ready to go!`);
}

export default main;
