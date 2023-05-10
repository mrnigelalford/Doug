import * as dotenv from 'dotenv';
import { testHSForm } from './testForm';
dotenv.config();

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.Hubspot_API_Key}`,
};

export const createHubspotForm = async (centerName: string): Promise<any> => {
  // pull the template form
  console.info(`hubspot url: https://api.hubapi.com/forms/v2/forms/${process.env.Hubspot_FKO_Template}`)

  const response = await fetch(
    `https://api.hubapi.com/forms/v2/forms/${process.env.Hubspot_FKO_Template}`,
    {
      method: 'GET',
      headers,
    },
  );

  // update the template form
  const templateForm = await response.json();

  delete templateForm.guid;
  delete templateForm.portalId;
  templateForm.name = `Website Inquiry - ${centerName} - FKO`;

  const testForm = JSON.stringify(testHSForm(centerName));

  // create a new form
  return fetch('https://api.hubapi.com/forms/v2/forms', {
    method: 'post',
    body: testForm,
    headers,
  }).catch(error => {
    console.error('Error creating HubSpot form: ', error.message);
  });
};

// formId: "d5515138-3258-42a0-b36a-a697d3c78da0"
