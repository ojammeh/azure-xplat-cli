// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '21466899-20b2-463c-8c30-b8fb28a43248',
    name: 'Core-RP Alpha Subscription-11',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xTestDiskCreate9498/providers/Microsoft.Compute/disks/xplatDisk8814?api-version=2017-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"accountType\": \"Standard_LRS\",\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"timeCreated\": \"2017-02-02T23:06:14.0251387+00:00\",\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"diskState\": \"Unattached\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/disks\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xTestDiskCreate9498/providers/Microsoft.Compute/disks/xplatDisk8814\",\r\n  \"name\": \"xplatDisk8814\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '622',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e9309273-0eeb-49f7-82ac-4b3f4fa2919e_131291539872327529',
  'x-ms-request-id': '16d255c0-e433-408c-ac78-e08de1ef9fba',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': '34bf101a-d812-46dc-b259-d958d9b8373a',
  'x-ms-routing-request-id': 'WESTUS2:20170202T230645Z:34bf101a-d812-46dc-b259-d958d9b8373a',
  date: 'Thu, 02 Feb 2017 23:06:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xTestDiskCreate9498/providers/Microsoft.Compute/disks/xplatDisk8814?api-version=2017-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"accountType\": \"Standard_LRS\",\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"timeCreated\": \"2017-02-02T23:06:14.0251387+00:00\",\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"diskState\": \"Unattached\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/disks\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xTestDiskCreate9498/providers/Microsoft.Compute/disks/xplatDisk8814\",\r\n  \"name\": \"xplatDisk8814\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '622',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e9309273-0eeb-49f7-82ac-4b3f4fa2919e_131291539872327529',
  'x-ms-request-id': '16d255c0-e433-408c-ac78-e08de1ef9fba',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': '34bf101a-d812-46dc-b259-d958d9b8373a',
  'x-ms-routing-request-id': 'WESTUS2:20170202T230645Z:34bf101a-d812-46dc-b259-d958d9b8373a',
  date: 'Thu, 02 Feb 2017 23:06:44 GMT',
  connection: 'close' });
 return result; }]];
