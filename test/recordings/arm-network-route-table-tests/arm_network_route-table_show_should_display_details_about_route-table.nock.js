// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"ArmRouteTbl\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl\",\r\n  \"etag\": \"W/\\\"0b31c035-50bc-4330-a356-a2d43fd9b94c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '323',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0b31c035-50bc-4330-a356-a2d43fd9b94c"',
  'x-ms-request-id': '6d6e72f1-bc1f-44de-b6bd-c7f7c2db5463',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-correlation-request-id': 'c0808b33-eefc-40c3-8d66-c0c9d85b54d5',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T114348Z:c0808b33-eefc-40c3-8d66-c0c9d85b54d5',
  date: 'Wed, 22 Jul 2015 11:43:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"ArmRouteTbl\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl\",\r\n  \"etag\": \"W/\\\"0b31c035-50bc-4330-a356-a2d43fd9b94c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '323',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0b31c035-50bc-4330-a356-a2d43fd9b94c"',
  'x-ms-request-id': '6d6e72f1-bc1f-44de-b6bd-c7f7c2db5463',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-correlation-request-id': 'c0808b33-eefc-40c3-8d66-c0c9d85b54d5',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T114348Z:c0808b33-eefc-40c3-8d66-c0c9d85b54d5',
  date: 'Wed, 22 Jul 2015 11:43:47 GMT',
  connection: 'close' });
 return result; }]];