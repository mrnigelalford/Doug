export const testHSForm = (centerName: string) => ({
  "name": `Website Inquiry - ${centerName} - FKO`,
  "action": "",
  "method": "POST",
  "cssClass": "hs-form stacked",
  "redirect": "",
  "submitText": "Submit",
  "followUpId": "",
  "notifyRecipients": "",
  "leadNurturingCampaignId": "",
  "formFieldGroups": [
    {
      "fields": [
        {
          "name": "firstname",
          "label": "First Name",
          "type": "string",
          "fieldType": "text",
          "description": "",
          "groupName": "contactinformation",
          "displayOrder": -1,
          "required": true,
          "selectedOptions": [],
          "options": [],
          "validation": {
            "name": "",
            "message": "",
            "data": "",
            "useDefaultBlockList": false,
            "blockedEmailAddresses": []
          },
          "enabled": true,
          "hidden": false,
          "defaultValue": "",
          "isSmartField": false,
          "unselectedLabel": "",
          "placeholder": "",
          "dependentFieldFilters": [],
          "labelHidden": false,
          "propertyObjectType": "CONTACT",
          "metaData": [],
          "objectTypeId": "0-1"
        }
      ],
      "default": true,
      "isSmartGroup": false,
      "richText": { "content": "", "type": "TEXT" },
      "isPageBreak": false
    },
    {
      "fields": [
        {
          "name": "lastname",
          "label": "Last Name",
          "type": "string",
          "fieldType": "text",
          "description": "",
          "groupName": "contactinformation",
          "displayOrder": -1,
          "required": true,
          "selectedOptions": [],
          "options": [],
          "validation": {
            "name": "",
            "message": "",
            "data": "",
            "useDefaultBlockList": false,
            "blockedEmailAddresses": []
          },
          "enabled": true,
          "hidden": false,
          "defaultValue": "",
          "isSmartField": false,
          "unselectedLabel": "",
          "placeholder": "",
          "dependentFieldFilters": [],
          "labelHidden": false,
          "propertyObjectType": "CONTACT",
          "metaData": [],
          "objectTypeId": "0-1"
        }
      ],
      "default": true,
      "isSmartGroup": false,
      "richText": { "content": "", "type": "TEXT" },
      "isPageBreak": false
    },
    {
      "fields": [
        {
          "name": "email",
          "label": "Email",
          "type": "string",
          "fieldType": "text",
          "description": "",
          "groupName": "contactinformation",
          "displayOrder": -1,
          "required": true,
          "selectedOptions": [],
          "options": [],
          "validation": {
            "name": "",
            "message": "",
            "data": "",
            "useDefaultBlockList": false,
            "blockedEmailAddresses": []
          },
          "enabled": true,
          "hidden": false,
          "defaultValue": "",
          "isSmartField": false,
          "unselectedLabel": "",
          "placeholder": "",
          "dependentFieldFilters": [],
          "labelHidden": false,
          "propertyObjectType": "CONTACT",
          "metaData": [],
          "objectTypeId": "0-1"
        }
      ],
      "default": true,
      "isSmartGroup": false,
      "richText": { "content": "", "type": "TEXT" },
      "isPageBreak": false
    },
    {
      "fields": [
        {
          "name": "phone",
          "label": "Phone Number",
          "type": "string",
          "fieldType": "text",
          "description": "",
          "groupName": "contactinformation",
          "displayOrder": -1,
          "required": true,
          "selectedOptions": [],
          "options": [],
          "validation": {
            "name": "",
            "message": "",
            "data": "7:20:true",
            "useDefaultBlockList": false,
            "blockedEmailAddresses": []
          },
          "enabled": true,
          "hidden": false,
          "defaultValue": "",
          "isSmartField": false,
          "unselectedLabel": "",
          "placeholder": "",
          "dependentFieldFilters": [],
          "labelHidden": false,
          "propertyObjectType": "CONTACT",
          "metaData": [],
          "objectTypeId": "0-1"
        }
      ],
      "default": true,
      "isSmartGroup": false,
      "richText": { "content": "", "type": "TEXT" },
      "isPageBreak": false
    },
    {
      "fields": [
        {
          "name": "locations__drop_down_",
          "label": "Location",
          "type": "enumeration",
          "fieldType": "select",
          "description": "",
          "groupName": "contactinformation",
          "displayOrder": -1,
          "required": true,
          "selectedOptions": [centerName],
          "options": [
            {
              "label": "Marietta",
              "value": "Marietta",
              "displayOrder": 1,
              "doubleData": 0,
              "hidden": false,
              "description": "",
              "readOnly": false
            },
            {
              "label": centerName,
              "value": centerName,
              "displayOrder": 2,
              "doubleData": 0,
              "hidden": false,
              "description": "",
              "readOnly": false
            },
            {
              "label": "Costa Mesa",
              "value": "Costa Mesa",
              "displayOrder": 3,
              "doubleData": 0,
              "hidden": false,
              "description": "",
              "readOnly": false
            },
          ],
          "validation": {
            "name": "",
            "message": "",
            "data": "",
            "useDefaultBlockList": false,
            "blockedEmailAddresses": []
          },
          "enabled": true,
          "hidden": false,
          "defaultValue": "",
          "isSmartField": false,
          "unselectedLabel": "",
          "placeholder": "",
          "dependentFieldFilters": [],
          "labelHidden": false,
          "propertyObjectType": "CONTACT",
          "metaData": [],
          "objectTypeId": "0-1"
        }
      ],
      "default": true,
      "isSmartGroup": false,
      "richText": { "content": "", "type": "TEXT" },
      "isPageBreak": false
    },
    {
      "fields": [
        {
          "name": "leadsource",
          "label": "How Did You Hear About TOCA Football?",
          "type": "enumeration",
          "fieldType": "select",
          "description": "",
          "groupName": "marketing",
          "displayOrder": -1,
          "required": true,
          "selectedOptions": [],
          "options": [
            {
              "label": "Google",
              "value": "Google AdWords",
              "displayOrder": 0,
              "doubleData": 0,
              "hidden": false,
              "description": "",
              "readOnly": false
            },
            {
              "label": "Facebook",
              "value": "Facebook",
              "displayOrder": 1,
              "doubleData": 0,
              "hidden": false,
              "description": "",
              "readOnly": false
            },
            {
              "label": "Instagram",
              "value": "Instagram",
              "displayOrder": 2,
              "doubleData": 0,
              "hidden": false,
              "description": "",
              "readOnly": false
            },
            {
              "label": "Friends/Family/Coach",
              "value": "Word of mouth",
              "displayOrder": 3,
              "doubleData": 0,
              "hidden": false,
              "description": "",
              "readOnly": false
            },
            {
              "label": "Event",
              "value": "Customer Event",
              "displayOrder": 6,
              "doubleData": 0,
              "hidden": false,
              "description": "",
              "readOnly": false
            },
            {
              "label": "Other",
              "value": "Other",
              "displayOrder": 8,
              "doubleData": 0,
              "hidden": false,
              "description": "",
              "readOnly": false
            }
          ],
          "validation": {
            "name": "",
            "message": "",
            "data": "",
            "useDefaultBlockList": false,
            "blockedEmailAddresses": []
          },
          "enabled": true,
          "hidden": false,
          "defaultValue": "",
          "isSmartField": false,
          "unselectedLabel": "",
          "placeholder": "",
          "dependentFieldFilters": [],
          "labelHidden": false,
          "propertyObjectType": "CONTACT",
          "metaData": [],
          "objectTypeId": "0-1"
        }
      ],
      "default": true,
      "isSmartGroup": false,
      "richText": { "content": "", "type": "TEXT" },
      "isPageBreak": false
    },
    {
      "fields": [
        {
          "name": "utm_source",
          "label": "UTM Source",
          "type": "string",
          "fieldType": "text",
          "description": "",
          "groupName": "analyticsinformation",
          "displayOrder": -1,
          "required": false,
          "selectedOptions": [],
          "options": [],
          "validation": {
            "name": "",
            "message": "",
            "data": "",
            "useDefaultBlockList": false,
            "blockedEmailAddresses": []
          },
          "enabled": true,
          "hidden": true,
          "defaultValue": "",
          "isSmartField": false,
          "unselectedLabel": "",
          "placeholder": "",
          "dependentFieldFilters": [],
          "labelHidden": false,
          "propertyObjectType": "CONTACT",
          "metaData": [],
          "objectTypeId": "0-1"
        }
      ],
      "default": true,
      "isSmartGroup": false,
      "richText": { "content": "", "type": "TEXT" },
      "isPageBreak": false
    },
    {
      "fields": [
        {
          "name": "utm_medium",
          "label": "UTM Medium",
          "type": "string",
          "fieldType": "text",
          "description": "",
          "groupName": "analyticsinformation",
          "displayOrder": -1,
          "required": false,
          "selectedOptions": [],
          "options": [],
          "validation": {
            "name": "",
            "message": "",
            "data": "",
            "useDefaultBlockList": false,
            "blockedEmailAddresses": []
          },
          "enabled": true,
          "hidden": true,
          "defaultValue": "",
          "isSmartField": false,
          "unselectedLabel": "",
          "placeholder": "",
          "dependentFieldFilters": [],
          "labelHidden": false,
          "propertyObjectType": "CONTACT",
          "metaData": [],
          "objectTypeId": "0-1"
        }
      ],
      "default": true,
      "isSmartGroup": false,
      "richText": { "content": "", "type": "TEXT" },
      "isPageBreak": false
    },
    {
      "fields": [
        {
          "name": "gclid",
          "label": "GCLID",
          "type": "string",
          "fieldType": "text",
          "description": "",
          "groupName": "conversioninformation",
          "displayOrder": -1,
          "required": false,
          "selectedOptions": [],
          "options": [],
          "validation": {
            "name": "",
            "message": "",
            "data": "",
            "useDefaultBlockList": false,
            "blockedEmailAddresses": []
          },
          "enabled": true,
          "hidden": true,
          "defaultValue": "",
          "isSmartField": false,
          "unselectedLabel": "",
          "placeholder": "",
          "dependentFieldFilters": [],
          "labelHidden": false,
          "propertyObjectType": "CONTACT",
          "metaData": [],
          "objectTypeId": "0-1"
        }
      ],
      "default": true,
      "isSmartGroup": false,
      "richText": { "content": "", "type": "TEXT" },
      "isPageBreak": false
    }
  ],
  "createdAt": 1682995281152,
  "updatedAt": 1682995318663,
  "performableHtml": "",
  "migratedFrom": "",
  "ignoreCurrentValues": true,
  "metaData": [
    { "name": "lang", "value": "en" },
    {
      "name": "clonedFromForm",
      "value": "0e4823e3-2e29-4698-935c-af562d8373b6"
    },
    { "name": "embedType", "value": "REGULAR" }
  ],
  "deletable": true,
  "inlineMessage": "<p>Thank you for your interest in TOCA Football! One of our staff members will reach out to you shortly to book your Free Kickoff.</p>",
  "tmsId": "",
  "captchaEnabled": false,
  "campaignGuid": "",
  "cloneable": true,
  "editable": true,
  "formType": "HUBSPOT",
  "deletedAt": 0,
  "themeName": "canvas",
  "parentId": 3627925,
  "style": "{\"fontFamily\":\"Inter\",\"backgroundWidth\":\"100%\",\"labelTextColor\":\"#292b3b\",\"linkColor\":\"#0000EE\",\"clickedLinkColor\":\"#551A8B\",\"labelTextSize\":\"14px\",\"helpTextColor\":\"#7C98B6\",\"helpTextSize\":\"11px\",\"legalConsentTextColor\":\"#33475b\",\"legalConsentTextSize\":\"14px\",\"thankYouTextColor\":\"#292b3b\",\"thankYouTextSize\":\"16px\",\"submitColor\":\"#2ed7f3\",\"submitAlignment\":\"left\",\"submitFontColor\":\"#ffffff\",\"submitSize\":\"14px\",\"paginationProgressColor\":\"#598aff\",\"paginationProgressTextColor\":\"#33475b\",\"paginationProgressShow\":true,\"paginationProgressTransition\":\"fade\",\"paginationProgressTheme\":\"default\",\"paginationContentUseScroll\":false,\"paginationContentScrollHeight\":\"100%\"}",
  "isPublished": true,
}
)