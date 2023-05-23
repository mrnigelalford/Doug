import { setEvent } from './webflow/setCenterFlow';

// local test setup to test webflow api actions

setEvent(
  {
    name: 'Test Center',
    address: '123 Test St',
    hubspotFormID: '1234567890',
    template: 'nashville',
  },
  '644aef5d10974d337ddb7de5',
);
