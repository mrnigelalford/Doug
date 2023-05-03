export const testHSForm = (centerName: string) => ({
  name: `Example Test ${centerName} Form`,
  action: '',
  method: 'POST',
  cssClass: 'hs-form stacked',
  redirect: '',
  submitText: 'Submit',
  followUpId: '',
  notifyRecipients: '',
  leadNurturingCampaignId: '',
  formFieldGroups: [
    {
      fields: [
        {
          name: 'firstname',
          label: 'First Name',
          type: 'string',
          fieldType: 'text',
          description: '',
          groupName: 'contactinformation',
          displayOrder: -1,
          required: false,
          selectedOptions: [],
          options: [],
          validation: {
            name: '',
            message: '',
            data: '',
            useDefaultBlockList: false,
            blockedEmailAddresses: [],
          },
          enabled: true,
          hidden: false,
          defaultValue: '',
          isSmartField: false,
          unselectedLabel: '',
          placeholder: '',
          dependentFieldFilters: [],
          labelHidden: false,
        },
        {
          name: 'lastname',
          label: 'Last Name',
          type: 'string',
          fieldType: 'text',
          description: '',
          groupName: 'contactinformation',
          displayOrder: -1,
          required: false,
          selectedOptions: [],
          options: [],
          validation: {
            name: '',
            message: '',
            data: '',
            useDefaultBlockList: false,
            blockedEmailAddresses: [],
          },
          enabled: true,
          hidden: false,
          defaultValue: '',
          isSmartField: false,
          unselectedLabel: '',
          placeholder: '',
          dependentFieldFilters: [],
          labelHidden: false,
        },
      ],
      default: true,
      isSmartGroup: false,
      richText: {
        content: '',
      },
    },
    {
      fields: [
        {
          name: 'email',
          label: 'Email',
          type: 'string',
          fieldType: 'text',
          description: '',
          groupName: 'contactinformation',
          displayOrder: -1,
          required: true,
          selectedOptions: [],
          options: [],
          validation: {
            name: 'email',
            message: 'Please enter a valid email address',
            data: '',
            useDefaultBlockList: false,
            blockedEmailAddresses: [],
          },
          enabled: true,
          hidden: false,
          defaultValue: '',
          isSmartField: false,
          unselectedLabel: '',
          placeholder: '',
          dependentFieldFilters: [],
          labelHidden: false,
        },
      ],
      default: true,
      isSmartGroup: false,
      richText: {
        content: '',
      },
    },
  ],
  createdAt: 1479855093627,
  updatedAt: 1479855101085,
  performableHtml: '',
  migratedFrom: '',
  ignoreCurrentValues: false,
  metaData: [],
  deletable: true,
  inlineMessage: '',
  tmsId: '',
  captchaEnabled: false,
  campaignGuid: '',
  cloneable: true,
  editable: true,
  formType: 'HUBSPOT',
});

