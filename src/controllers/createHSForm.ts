import * as dotenv from 'dotenv';
dotenv.config();

export const createHubspotForm = async (centerName: string): Promise<any> => {
  // pull the template form
  console.info('hubspotapi: ', `https://api.hubapi.com/forms/v2/forms/${process.env.Hubspot_FKO_Template}`);

  const response = await fetch(
    `https://api.hubapi.com/forms/v2/forms/${process.env.Hubspot_FKO_Template}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.Hubspot_API_Key}`,
      },
    },
  );

  // update the template form
  const templateForm = await response.json();
  console.debug('hubspot templateForm: ', templateForm);

  templateForm.name = `Website Inquiry - ${centerName} - FKO`;
  delete templateForm.guid;
  delete templateForm.portalId;

  // create a new form
  return fetch(`https://api.hubapi.com/forms/v2/forms`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.Hubspot_API_Key}`,
    },
    body: JSON.stringify(templateForm),
  });
};

// formId: "941b08b7-ae78-4cad-8531-f460eabb25a1"
