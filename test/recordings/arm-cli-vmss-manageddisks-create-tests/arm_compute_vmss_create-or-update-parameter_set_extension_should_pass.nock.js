// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
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
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2017-03-30', '*')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"singlePlacementGroup\": true,\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\",\r\n          \"managedDisk\": {\r\n            \"storageAccountType\": \"Premium_LRS\"\r\n          }\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        },\r\n        \"dataDisks\": [\r\n          {\r\n            \"lun\": 0,\r\n            \"createOption\": \"Empty\",\r\n            \"caching\": \"None\",\r\n            \"managedDisk\": {\r\n              \"storageAccountType\": \"Premium_LRS\"\r\n            },\r\n            \"diskSizeGB\": 32\r\n          }\r\n        ]\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Network/virtualNetworks/xplattestvnet3238/subnets/xplattestsubnet7150\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]},\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Updating\",\r\n    \"overprovision\": false,\r\n    \"uniqueId\": \"5f4869d7-1fe8-48be-b9c1-8fc75762241e\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2749',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/22d2b428-1ce2-48fd-833e-2a8cef226037?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '22d2b428-1ce2-48fd-833e-2a8cef226037',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '94db7982-1291-4e4b-a138-edbe2eb1bf21',
  'x-ms-routing-request-id': 'WESTUS2:20170530T025345Z:94db7982-1291-4e4b-a138-edbe2eb1bf21',
  date: 'Tue, 30 May 2017 02:53:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2017-03-30', '*')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"singlePlacementGroup\": true,\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\",\r\n          \"managedDisk\": {\r\n            \"storageAccountType\": \"Premium_LRS\"\r\n          }\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        },\r\n        \"dataDisks\": [\r\n          {\r\n            \"lun\": 0,\r\n            \"createOption\": \"Empty\",\r\n            \"caching\": \"None\",\r\n            \"managedDisk\": {\r\n              \"storageAccountType\": \"Premium_LRS\"\r\n            },\r\n            \"diskSizeGB\": 32\r\n          }\r\n        ]\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Network/virtualNetworks/xplattestvnet3238/subnets/xplattestsubnet7150\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]},\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Updating\",\r\n    \"overprovision\": false,\r\n    \"uniqueId\": \"5f4869d7-1fe8-48be-b9c1-8fc75762241e\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2749',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/22d2b428-1ce2-48fd-833e-2a8cef226037?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '22d2b428-1ce2-48fd-833e-2a8cef226037',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '94db7982-1291-4e4b-a138-edbe2eb1bf21',
  'x-ms-routing-request-id': 'WESTUS2:20170530T025345Z:94db7982-1291-4e4b-a138-edbe2eb1bf21',
  date: 'Tue, 30 May 2017 02:53:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/22d2b428-1ce2-48fd-833e-2a8cef226037?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-05-30T02:53:44.9691517+00:00\",\r\n  \"endTime\": \"2017-05-30T02:53:45.2817094+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"22d2b428-1ce2-48fd-833e-2a8cef226037\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '70785a87-c822-451a-809d-b88788267a12',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '8d332e59-76a0-472a-b425-ef2e680af598',
  'x-ms-routing-request-id': 'WESTUS2:20170530T025416Z:8d332e59-76a0-472a-b425-ef2e680af598',
  date: 'Tue, 30 May 2017 02:54:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/22d2b428-1ce2-48fd-833e-2a8cef226037?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-05-30T02:53:44.9691517+00:00\",\r\n  \"endTime\": \"2017-05-30T02:53:45.2817094+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"22d2b428-1ce2-48fd-833e-2a8cef226037\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '70785a87-c822-451a-809d-b88788267a12',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '8d332e59-76a0-472a-b425-ef2e680af598',
  'x-ms-routing-request-id': 'WESTUS2:20170530T025416Z:8d332e59-76a0-472a-b425-ef2e680af598',
  date: 'Tue, 30 May 2017 02:54:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2017-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"singlePlacementGroup\": true,\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\",\r\n          \"managedDisk\": {\r\n            \"storageAccountType\": \"Premium_LRS\"\r\n          }\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        },\r\n        \"dataDisks\": [\r\n          {\r\n            \"lun\": 0,\r\n            \"createOption\": \"Empty\",\r\n            \"caching\": \"None\",\r\n            \"managedDisk\": {\r\n              \"storageAccountType\": \"Premium_LRS\"\r\n            },\r\n            \"diskSizeGB\": 32\r\n          }\r\n        ]\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Network/virtualNetworks/xplattestvnet3238/subnets/xplattestsubnet7150\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]},\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"overprovision\": false,\r\n    \"uniqueId\": \"5f4869d7-1fe8-48be-b9c1-8fc75762241e\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2750',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '505684f8-4a61-4240-9374-43b84c894ff5',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'c7a58728-4cf6-40b5-9446-eacbfacd0c59',
  'x-ms-routing-request-id': 'WESTUS2:20170530T025417Z:c7a58728-4cf6-40b5-9446-eacbfacd0c59',
  date: 'Tue, 30 May 2017 02:54:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2017-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"singlePlacementGroup\": true,\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\",\r\n          \"managedDisk\": {\r\n            \"storageAccountType\": \"Premium_LRS\"\r\n          }\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        },\r\n        \"dataDisks\": [\r\n          {\r\n            \"lun\": 0,\r\n            \"createOption\": \"Empty\",\r\n            \"caching\": \"None\",\r\n            \"managedDisk\": {\r\n              \"storageAccountType\": \"Premium_LRS\"\r\n            },\r\n            \"diskSizeGB\": 32\r\n          }\r\n        ]\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Network/virtualNetworks/xplattestvnet3238/subnets/xplattestsubnet7150\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]},\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"overprovision\": false,\r\n    \"uniqueId\": \"5f4869d7-1fe8-48be-b9c1-8fc75762241e\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2750',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '505684f8-4a61-4240-9374-43b84c894ff5',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'c7a58728-4cf6-40b5-9446-eacbfacd0c59',
  'x-ms-routing-request-id': 'WESTUS2:20170530T025417Z:c7a58728-4cf6-40b5-9446-eacbfacd0c59',
  date: 'Tue, 30 May 2017 02:54:17 GMT',
  connection: 'close' });
 return result; }]];