import { Client } from "@hubspot/api-client";
import { HSForm } from "../types/hubspot";
import { Response } from 'node-fetch';
const hubspotClient = new Client({ accessToken: process.env.hubspotApiKey });

export const createHubspotForm = async (centerName: string): Promise<Response> => {
    // pull the template form
    const response = await hubspotClient.apiRequest({
        method: "GET",
        path: `/forms/v2/forms${process.env.Hubspot_FKO_Template}`
    });

    // update the template form
    const templateForm = await response.json();
    console.debug('hubspot templateForm: ', templateForm);

    templateForm.name = `Website Inquiry - ${centerName} - FKO`;
    delete templateForm.guid;
    delete templateForm.portalId;

    // create a new form
    return hubspotClient.apiRequest({
        method: "POST",
        path: "/forms/v2/forms",
        body: templateForm
    });
};

// formId: "941b08b7-ae78-4cad-8531-f460eabb25a1"