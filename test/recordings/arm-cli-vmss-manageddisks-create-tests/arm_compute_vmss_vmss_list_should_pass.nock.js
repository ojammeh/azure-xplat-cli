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
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/virtualMachineScaleSets?api-version=2017-03-30')
  .reply(200, "{\"value\":[{\"sku\":{\"name\":\"Standard_DS1\",\"tier\":\"Standard\",\"capacity\":1},\"properties\":{\"singlePlacementGroup\":true,\"upgradePolicy\":{\"mode\":\"Manual\"},\"virtualMachineProfile\":{\"osProfile\":{\"computerNamePrefix\":\"t1\",\"adminUsername\":\"User12\",\"windowsConfiguration\":{\"provisionVMAgent\":true,\"enableAutomaticUpdates\":true},\"secrets\":[]},\"storageProfile\":{\"osDisk\":{\"vhdContainers\":[\"https://t1sto01746654477.blob.core.windows.net/t1-westu-1746654477-disk-container\",\"https://t1sto11746654477.blob.core.windows.net/t1-westu-1746654477-disk-container\",\"https://t1sto21746654477.blob.core.windows.net/t1-westu-1746654477-disk-container\",\"https://t1sto31746654477.blob.core.windows.net/t1-westu-1746654477-disk-container\",\"https://t1sto41746654477.blob.core.windows.net/t1-westu-1746654477-disk-container\"],\"name\":\"t1-westu-1746654477-os-disk\",\"createOption\":\"FromImage\",\"caching\":\"ReadOnly\"},\"imageReference\":{\"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-R2-Datacenter\",\"version\":\"latest\"}},\"networkProfile\":{\"networkInterfaceConfigurations\":[{\"name\":\"t1-westu-1746654477-nic\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"t1-westu-1746654477-pip\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/hpftvmss0504a/providers/Microsoft.Network/virtualNetworks/t1-westu-1746654477-vnet/subnets/t1-westu-1746654477-snet\"},\"loadBalancerBackendAddressPools\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/hpftvmss0504a/providers/Microsoft.Network/loadBalancers/t1-westu-1746654477-lb/backendAddressPools/t1-westu-1746654477-be\"}],\"loadBalancerInboundNatPools\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/hpftvmss0504a/providers/Microsoft.Network/loadBalancers/t1-westu-1746654477-lb/inboundNatPools/t1-westu-1746654477-nat\"}]}}]}}]}},\"provisioningState\":\"Succeeded\",\"overprovision\":false,\"uniqueId\":\"2ebc5dda-2ea7-45d9-93f4-5e470e77922f\"},\"type\":\"Microsoft.Compute/virtualMachineScaleSets\",\"location\":\"westus\",\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/HPFTVMSS0504A/providers/Microsoft.Compute/virtualMachineScaleSets/t1\",\"name\":\"t1\"},{\"sku\":{\"name\":\"Standard_A0\",\"tier\":\"Standard\",\"capacity\":2},\"properties\":{\"singlePlacementGroup\":true,\"upgradePolicy\":{\"mode\":\"Automatic\"},\"virtualMachineProfile\":{\"osProfile\":{\"computerNamePrefix\":\"test\",\"adminUsername\":\"Foo12\",\"windowsConfiguration\":{\"provisionVMAgent\":true,\"enableAutomaticUpdates\":true},\"secrets\":[]},\"storageProfile\":{\"osDisk\":{\"createOption\":\"FromImage\",\"caching\":\"None\",\"managedDisk\":{\"storageAccountType\":\"Standard_LRS\"}},\"imageReference\":{\"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-R2-Datacenter\",\"version\":\"4.0.20160617\"},\"dataDisks\":[{\"lun\":1,\"createOption\":\"Empty\",\"caching\":\"None\",\"managedDisk\":{\"storageAccountType\":\"Standard_LRS\"},\"diskSizeGB\":128}]},\"networkProfile\":{\"networkInterfaceConfigurations\":[{\"name\":\"vmsstestnetconfig453\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"vmsstestnetconfig9253\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/crptestar47501/providers/Microsoft.Network/virtualNetworks/vn116/subnets/sn7641\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]}},\"provisioningState\":\"Succeeded\",\"overprovision\":false,\"uniqueId\":\"c3a2bed1-1c4c-4d89-bc9c-e3ac98a3b632\"},\"type\":\"Microsoft.Compute/virtualMachineScaleSets\",\"location\":\"southcentralus\",\"tags\":{\"RG\":\"rg\",\"testTag\":\"1\"},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/CRPTESTAR47501/providers/Microsoft.Compute/virtualMachineScaleSets/vmss3968\",\"name\":\"vmss3968\"},{\"sku\":{\"name\":\"Standard_A0\",\"tier\":\"Standard\",\"capacity\":2},\"properties\":{\"singlePlacementGroup\":true,\"upgradePolicy\":{\"mode\":\"Automatic\"},\"virtualMachineProfile\":{\"osProfile\":{\"computerNamePrefix\":\"test\",\"adminUsername\":\"Foo12\",\"windowsConfiguration\":{\"provisionVMAgent\":true,\"enableAutomaticUpdates\":true},\"secrets\":[]},\"storageProfile\":{\"osDisk\":{\"createOption\":\"FromImage\",\"caching\":\"None\",\"managedDisk\":{\"storageAccountType\":\"Standard_LRS\"}},\"imageReference\":{\"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-R2-Datacenter\",\"version\":\"4.0.20160617\"},\"dataDisks\":[{\"lun\":1,\"createOption\":\"Empty\",\"caching\":\"None\",\"managedDisk\":{\"storageAccountType\":\"Standard_LRS\"},\"diskSizeGB\":128}]},\"networkProfile\":{\"networkInterfaceConfigurations\":[{\"name\":\"vmsstestnetconfig5573\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"vmsstestnetconfig5925\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/crptestar52971/providers/Microsoft.Network/virtualNetworks/vn7152/subnets/sn5389\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]}},\"provisioningState\":\"Succeeded\",\"overprovision\":false,\"uniqueId\":\"568f781c-2fd5-4f90-b860-8612e0d53025\"},\"type\":\"Microsoft.Compute/virtualMachineScaleSets\",\"location\":\"southeastasia\",\"tags\":{\"RG\":\"rg\",\"testTag\":\"1\"},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/CRPTESTAR52971/providers/Microsoft.Compute/virtualMachineScaleSets/vmss4478\",\"name\":\"vmss4478\"},{\"sku\":{\"name\":\"Standard_A0\",\"tier\":\"Standard\",\"capacity\":2},\"properties\":{\"singlePlacementGroup\":true,\"upgradePolicy\":{\"mode\":\"Automatic\"},\"virtualMachineProfile\":{\"osProfile\":{\"computerNamePrefix\":\"test\",\"adminUsername\":\"Foo12\",\"windowsConfiguration\":{\"provisionVMAgent\":true,\"enableAutomaticUpdates\":true},\"secrets\":[]},\"storageProfile\":{\"osDisk\":{\"vhdContainers\":[\"https://crptestar5771.blob.core.windows.net/crptestar9342\"],\"name\":\"test\",\"createOption\":\"FromImage\",\"caching\":\"None\"},\"imageReference\":{\"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-R2-Datacenter\",\"version\":\"4.0.20160617\"}},\"networkProfile\":{\"networkInterfaceConfigurations\":[{\"name\":\"vmsstestnetconfig4093\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"vmsstestnetconfig9016\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/crptestar99791/providers/Microsoft.Network/virtualNetworks/vn8234/subnets/sn106\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]}},\"provisioningState\":\"Succeeded\",\"overprovision\":false,\"uniqueId\":\"f3aa4d09-6d3a-4436-982f-f17854108653\"},\"type\":\"Microsoft.Compute/virtualMachineScaleSets\",\"location\":\"southeastasia\",\"tags\":{\"RG\":\"rg\",\"testTag\":\"1\"},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/CRPTESTAR99791/providers/Microsoft.Compute/virtualMachineScaleSets/vmss2801\",\"name\":\"vmss2801\"},{\"sku\":{\"name\":\"Standard_DS1\",\"tier\":\"Standard\",\"capacity\":10},\"properties\":{\"singlePlacementGroup\":true,\"upgradePolicy\":{\"mode\":\"Manual\"},\"virtualMachineProfile\":{\"osProfile\":{\"computerNamePrefix\":\"test\",\"adminUsername\":\"azureuser\",\"windowsConfiguration\":{\"provisionVMAgent\":true,\"enableAutomaticUpdates\":true},\"secrets\":[]},\"storageProfile\":{\"osDisk\":{\"createOption\":\"FromImage\",\"caching\":\"None\",\"managedDisk\":{\"storageAccountType\":\"Premium_LRS\"}},\"imageReference\":{\"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-R2-Datacenter\",\"version\":\"latest\"},\"dataDisks\":[{\"lun\":0,\"createOption\":\"Empty\",\"caching\":\"None\",\"managedDisk\":{\"storageAccountType\":\"Premium_LRS\"},\"diskSizeGB\":32}]},\"networkProfile\":{\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Network/virtualNetworks/xplattestvnet3238/subnets/xplattestsubnet7150\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]},\"extensionProfile\":{\"extensions\":[{\"properties\":{\"publisher\":\"Microsoft.Compute\",\"type\":\"VMAccessAgent\",\"typeHandlerVersion\":\"2.0\",\"autoUpgradeMinorVersion\":true,\"settings\":{}},\"name\":\"test\"},{\"properties\":{\"publisher\":\"Microsoft.Compute\",\"type\":\"BGInfo\",\"typeHandlerVersion\":\"2.1\",\"autoUpgradeMinorVersion\":true},\"name\":\"test1\"}]}},\"provisioningState\":\"Succeeded\",\"overprovision\":false,\"uniqueId\":\"5f4869d7-1fe8-48be-b9c1-8fc75762241e\"},\"type\":\"Microsoft.Compute/virtualMachineScaleSets\",\"location\":\"southeastasia\",\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/XPLATTSTVMSSGCREATE5481/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\"name\":\"xplattestvmss5\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-original-request-ids': '783e37e8-c55f-46b6-a98d-a83bd73e9980, d4deac19-27d0-4347-8bc4-e32d7dd19a81, 121bf5e3-d524-4ef2-ab94-fd8748a298ec',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-request-id': '04302db5-26ec-4e1f-819c-9878ede488c5',
  'x-ms-correlation-request-id': '04302db5-26ec-4e1f-819c-9878ede488c5',
  'x-ms-routing-request-id': 'WESTUS2:20170530T025422Z:04302db5-26ec-4e1f-819c-9878ede488c5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 May 2017 02:54:22 GMT',
  connection: 'close',
  'content-length': '8625' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/virtualMachineScaleSets?api-version=2017-03-30')
  .reply(200, "{\"value\":[{\"sku\":{\"name\":\"Standard_DS1\",\"tier\":\"Standard\",\"capacity\":1},\"properties\":{\"singlePlacementGroup\":true,\"upgradePolicy\":{\"mode\":\"Manual\"},\"virtualMachineProfile\":{\"osProfile\":{\"computerNamePrefix\":\"t1\",\"adminUsername\":\"User12\",\"windowsConfiguration\":{\"provisionVMAgent\":true,\"enableAutomaticUpdates\":true},\"secrets\":[]},\"storageProfile\":{\"osDisk\":{\"vhdContainers\":[\"https://t1sto01746654477.blob.core.windows.net/t1-westu-1746654477-disk-container\",\"https://t1sto11746654477.blob.core.windows.net/t1-westu-1746654477-disk-container\",\"https://t1sto21746654477.blob.core.windows.net/t1-westu-1746654477-disk-container\",\"https://t1sto31746654477.blob.core.windows.net/t1-westu-1746654477-disk-container\",\"https://t1sto41746654477.blob.core.windows.net/t1-westu-1746654477-disk-container\"],\"name\":\"t1-westu-1746654477-os-disk\",\"createOption\":\"FromImage\",\"caching\":\"ReadOnly\"},\"imageReference\":{\"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-R2-Datacenter\",\"version\":\"latest\"}},\"networkProfile\":{\"networkInterfaceConfigurations\":[{\"name\":\"t1-westu-1746654477-nic\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"t1-westu-1746654477-pip\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/hpftvmss0504a/providers/Microsoft.Network/virtualNetworks/t1-westu-1746654477-vnet/subnets/t1-westu-1746654477-snet\"},\"loadBalancerBackendAddressPools\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/hpftvmss0504a/providers/Microsoft.Network/loadBalancers/t1-westu-1746654477-lb/backendAddressPools/t1-westu-1746654477-be\"}],\"loadBalancerInboundNatPools\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/hpftvmss0504a/providers/Microsoft.Network/loadBalancers/t1-westu-1746654477-lb/inboundNatPools/t1-westu-1746654477-nat\"}]}}]}}]}},\"provisioningState\":\"Succeeded\",\"overprovision\":false,\"uniqueId\":\"2ebc5dda-2ea7-45d9-93f4-5e470e77922f\"},\"type\":\"Microsoft.Compute/virtualMachineScaleSets\",\"location\":\"westus\",\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/HPFTVMSS0504A/providers/Microsoft.Compute/virtualMachineScaleSets/t1\",\"name\":\"t1\"},{\"sku\":{\"name\":\"Standard_A0\",\"tier\":\"Standard\",\"capacity\":2},\"properties\":{\"singlePlacementGroup\":true,\"upgradePolicy\":{\"mode\":\"Automatic\"},\"virtualMachineProfile\":{\"osProfile\":{\"computerNamePrefix\":\"test\",\"adminUsername\":\"Foo12\",\"windowsConfiguration\":{\"provisionVMAgent\":true,\"enableAutomaticUpdates\":true},\"secrets\":[]},\"storageProfile\":{\"osDisk\":{\"createOption\":\"FromImage\",\"caching\":\"None\",\"managedDisk\":{\"storageAccountType\":\"Standard_LRS\"}},\"imageReference\":{\"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-R2-Datacenter\",\"version\":\"4.0.20160617\"},\"dataDisks\":[{\"lun\":1,\"createOption\":\"Empty\",\"caching\":\"None\",\"managedDisk\":{\"storageAccountType\":\"Standard_LRS\"},\"diskSizeGB\":128}]},\"networkProfile\":{\"networkInterfaceConfigurations\":[{\"name\":\"vmsstestnetconfig453\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"vmsstestnetconfig9253\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/crptestar47501/providers/Microsoft.Network/virtualNetworks/vn116/subnets/sn7641\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]}},\"provisioningState\":\"Succeeded\",\"overprovision\":false,\"uniqueId\":\"c3a2bed1-1c4c-4d89-bc9c-e3ac98a3b632\"},\"type\":\"Microsoft.Compute/virtualMachineScaleSets\",\"location\":\"southcentralus\",\"tags\":{\"RG\":\"rg\",\"testTag\":\"1\"},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/CRPTESTAR47501/providers/Microsoft.Compute/virtualMachineScaleSets/vmss3968\",\"name\":\"vmss3968\"},{\"sku\":{\"name\":\"Standard_A0\",\"tier\":\"Standard\",\"capacity\":2},\"properties\":{\"singlePlacementGroup\":true,\"upgradePolicy\":{\"mode\":\"Automatic\"},\"virtualMachineProfile\":{\"osProfile\":{\"computerNamePrefix\":\"test\",\"adminUsername\":\"Foo12\",\"windowsConfiguration\":{\"provisionVMAgent\":true,\"enableAutomaticUpdates\":true},\"secrets\":[]},\"storageProfile\":{\"osDisk\":{\"createOption\":\"FromImage\",\"caching\":\"None\",\"managedDisk\":{\"storageAccountType\":\"Standard_LRS\"}},\"imageReference\":{\"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-R2-Datacenter\",\"version\":\"4.0.20160617\"},\"dataDisks\":[{\"lun\":1,\"createOption\":\"Empty\",\"caching\":\"None\",\"managedDisk\":{\"storageAccountType\":\"Standard_LRS\"},\"diskSizeGB\":128}]},\"networkProfile\":{\"networkInterfaceConfigurations\":[{\"name\":\"vmsstestnetconfig5573\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"vmsstestnetconfig5925\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/crptestar52971/providers/Microsoft.Network/virtualNetworks/vn7152/subnets/sn5389\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]}},\"provisioningState\":\"Succeeded\",\"overprovision\":false,\"uniqueId\":\"568f781c-2fd5-4f90-b860-8612e0d53025\"},\"type\":\"Microsoft.Compute/virtualMachineScaleSets\",\"location\":\"southeastasia\",\"tags\":{\"RG\":\"rg\",\"testTag\":\"1\"},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/CRPTESTAR52971/providers/Microsoft.Compute/virtualMachineScaleSets/vmss4478\",\"name\":\"vmss4478\"},{\"sku\":{\"name\":\"Standard_A0\",\"tier\":\"Standard\",\"capacity\":2},\"properties\":{\"singlePlacementGroup\":true,\"upgradePolicy\":{\"mode\":\"Automatic\"},\"virtualMachineProfile\":{\"osProfile\":{\"computerNamePrefix\":\"test\",\"adminUsername\":\"Foo12\",\"windowsConfiguration\":{\"provisionVMAgent\":true,\"enableAutomaticUpdates\":true},\"secrets\":[]},\"storageProfile\":{\"osDisk\":{\"vhdContainers\":[\"https://crptestar5771.blob.core.windows.net/crptestar9342\"],\"name\":\"test\",\"createOption\":\"FromImage\",\"caching\":\"None\"},\"imageReference\":{\"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-R2-Datacenter\",\"version\":\"4.0.20160617\"}},\"networkProfile\":{\"networkInterfaceConfigurations\":[{\"name\":\"vmsstestnetconfig4093\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"vmsstestnetconfig9016\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/crptestar99791/providers/Microsoft.Network/virtualNetworks/vn8234/subnets/sn106\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]}},\"provisioningState\":\"Succeeded\",\"overprovision\":false,\"uniqueId\":\"f3aa4d09-6d3a-4436-982f-f17854108653\"},\"type\":\"Microsoft.Compute/virtualMachineScaleSets\",\"location\":\"southeastasia\",\"tags\":{\"RG\":\"rg\",\"testTag\":\"1\"},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/CRPTESTAR99791/providers/Microsoft.Compute/virtualMachineScaleSets/vmss2801\",\"name\":\"vmss2801\"},{\"sku\":{\"name\":\"Standard_DS1\",\"tier\":\"Standard\",\"capacity\":10},\"properties\":{\"singlePlacementGroup\":true,\"upgradePolicy\":{\"mode\":\"Manual\"},\"virtualMachineProfile\":{\"osProfile\":{\"computerNamePrefix\":\"test\",\"adminUsername\":\"azureuser\",\"windowsConfiguration\":{\"provisionVMAgent\":true,\"enableAutomaticUpdates\":true},\"secrets\":[]},\"storageProfile\":{\"osDisk\":{\"createOption\":\"FromImage\",\"caching\":\"None\",\"managedDisk\":{\"storageAccountType\":\"Premium_LRS\"}},\"imageReference\":{\"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-R2-Datacenter\",\"version\":\"latest\"},\"dataDisks\":[{\"lun\":0,\"createOption\":\"Empty\",\"caching\":\"None\",\"managedDisk\":{\"storageAccountType\":\"Premium_LRS\"},\"diskSizeGB\":32}]},\"networkProfile\":{\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Network/virtualNetworks/xplattestvnet3238/subnets/xplattestsubnet7150\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]},\"extensionProfile\":{\"extensions\":[{\"properties\":{\"publisher\":\"Microsoft.Compute\",\"type\":\"VMAccessAgent\",\"typeHandlerVersion\":\"2.0\",\"autoUpgradeMinorVersion\":true,\"settings\":{}},\"name\":\"test\"},{\"properties\":{\"publisher\":\"Microsoft.Compute\",\"type\":\"BGInfo\",\"typeHandlerVersion\":\"2.1\",\"autoUpgradeMinorVersion\":true},\"name\":\"test1\"}]}},\"provisioningState\":\"Succeeded\",\"overprovision\":false,\"uniqueId\":\"5f4869d7-1fe8-48be-b9c1-8fc75762241e\"},\"type\":\"Microsoft.Compute/virtualMachineScaleSets\",\"location\":\"southeastasia\",\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/XPLATTSTVMSSGCREATE5481/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\"name\":\"xplattestvmss5\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-original-request-ids': '783e37e8-c55f-46b6-a98d-a83bd73e9980, d4deac19-27d0-4347-8bc4-e32d7dd19a81, 121bf5e3-d524-4ef2-ab94-fd8748a298ec',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-request-id': '04302db5-26ec-4e1f-819c-9878ede488c5',
  'x-ms-correlation-request-id': '04302db5-26ec-4e1f-819c-9878ede488c5',
  'x-ms-routing-request-id': 'WESTUS2:20170530T025422Z:04302db5-26ec-4e1f-819c-9878ede488c5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 May 2017 02:54:22 GMT',
  connection: 'close',
  'content-length': '8625' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Compute/virtualMachineScaleSets?api-version=2017-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"sku\": {\r\n        \"name\": \"Standard_DS1\",\r\n        \"tier\": \"Standard\",\r\n        \"capacity\": 10\r\n      },\r\n      \"properties\": {\r\n        \"singlePlacementGroup\": true,\r\n        \"upgradePolicy\": {\r\n          \"mode\": \"Manual\"\r\n        },\r\n        \"virtualMachineProfile\": {\r\n          \"osProfile\": {\r\n            \"computerNamePrefix\": \"test\",\r\n            \"adminUsername\": \"azureuser\",\r\n            \"windowsConfiguration\": {\r\n              \"provisionVMAgent\": true,\r\n              \"enableAutomaticUpdates\": true\r\n            },\r\n            \"secrets\": []\r\n          },\r\n          \"storageProfile\": {\r\n            \"osDisk\": {\r\n              \"createOption\": \"FromImage\",\r\n              \"caching\": \"None\",\r\n              \"managedDisk\": {\r\n                \"storageAccountType\": \"Premium_LRS\"\r\n              }\r\n            },\r\n            \"imageReference\": {\r\n              \"publisher\": \"MicrosoftWindowsServer\",\r\n              \"offer\": \"WindowsServer\",\r\n              \"sku\": \"2012-R2-Datacenter\",\r\n              \"version\": \"latest\"\r\n            },\r\n            \"dataDisks\": [\r\n              {\r\n                \"lun\": 0,\r\n                \"createOption\": \"Empty\",\r\n                \"caching\": \"None\",\r\n                \"managedDisk\": {\r\n                  \"storageAccountType\": \"Premium_LRS\"\r\n                },\r\n                \"diskSizeGB\": 32\r\n              }\r\n            ]\r\n          },\r\n          \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Network/virtualNetworks/xplattestvnet3238/subnets/xplattestsubnet7150\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]},\r\n          \"extensionProfile\": {\r\n            \"extensions\": [\r\n              {\r\n                \"properties\": {\r\n                  \"publisher\": \"Microsoft.Compute\",\r\n                  \"type\": \"VMAccessAgent\",\r\n                  \"typeHandlerVersion\": \"2.0\",\r\n                  \"autoUpgradeMinorVersion\": true,\r\n                  \"settings\": {}\r\n                },\r\n                \"name\": \"test\"\r\n              },\r\n              {\r\n                \"properties\": {\r\n                  \"publisher\": \"Microsoft.Compute\",\r\n                  \"type\": \"BGInfo\",\r\n                  \"typeHandlerVersion\": \"2.1\",\r\n                  \"autoUpgradeMinorVersion\": true\r\n                },\r\n                \"name\": \"test1\"\r\n              }\r\n            ]\r\n          }\r\n        },\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"overprovision\": false,\r\n        \"uniqueId\": \"5f4869d7-1fe8-48be-b9c1-8fc75762241e\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n      \"location\": \"southeastasia\",\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n      \"name\": \"xplattestvmss5\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3099',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'b8c16405-c8e1-470e-81b0-65859367d6a2',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'ced4249f-3b13-4c81-87b6-e04d3ecb5d19',
  'x-ms-routing-request-id': 'WESTUS2:20170530T025423Z:ced4249f-3b13-4c81-87b6-e04d3ecb5d19',
  date: 'Tue, 30 May 2017 02:54:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Compute/virtualMachineScaleSets?api-version=2017-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"sku\": {\r\n        \"name\": \"Standard_DS1\",\r\n        \"tier\": \"Standard\",\r\n        \"capacity\": 10\r\n      },\r\n      \"properties\": {\r\n        \"singlePlacementGroup\": true,\r\n        \"upgradePolicy\": {\r\n          \"mode\": \"Manual\"\r\n        },\r\n        \"virtualMachineProfile\": {\r\n          \"osProfile\": {\r\n            \"computerNamePrefix\": \"test\",\r\n            \"adminUsername\": \"azureuser\",\r\n            \"windowsConfiguration\": {\r\n              \"provisionVMAgent\": true,\r\n              \"enableAutomaticUpdates\": true\r\n            },\r\n            \"secrets\": []\r\n          },\r\n          \"storageProfile\": {\r\n            \"osDisk\": {\r\n              \"createOption\": \"FromImage\",\r\n              \"caching\": \"None\",\r\n              \"managedDisk\": {\r\n                \"storageAccountType\": \"Premium_LRS\"\r\n              }\r\n            },\r\n            \"imageReference\": {\r\n              \"publisher\": \"MicrosoftWindowsServer\",\r\n              \"offer\": \"WindowsServer\",\r\n              \"sku\": \"2012-R2-Datacenter\",\r\n              \"version\": \"latest\"\r\n            },\r\n            \"dataDisks\": [\r\n              {\r\n                \"lun\": 0,\r\n                \"createOption\": \"Empty\",\r\n                \"caching\": \"None\",\r\n                \"managedDisk\": {\r\n                  \"storageAccountType\": \"Premium_LRS\"\r\n                },\r\n                \"diskSizeGB\": 32\r\n              }\r\n            ]\r\n          },\r\n          \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Network/virtualNetworks/xplattestvnet3238/subnets/xplattestsubnet7150\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]},\r\n          \"extensionProfile\": {\r\n            \"extensions\": [\r\n              {\r\n                \"properties\": {\r\n                  \"publisher\": \"Microsoft.Compute\",\r\n                  \"type\": \"VMAccessAgent\",\r\n                  \"typeHandlerVersion\": \"2.0\",\r\n                  \"autoUpgradeMinorVersion\": true,\r\n                  \"settings\": {}\r\n                },\r\n                \"name\": \"test\"\r\n              },\r\n              {\r\n                \"properties\": {\r\n                  \"publisher\": \"Microsoft.Compute\",\r\n                  \"type\": \"BGInfo\",\r\n                  \"typeHandlerVersion\": \"2.1\",\r\n                  \"autoUpgradeMinorVersion\": true\r\n                },\r\n                \"name\": \"test1\"\r\n              }\r\n            ]\r\n          }\r\n        },\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"overprovision\": false,\r\n        \"uniqueId\": \"5f4869d7-1fe8-48be-b9c1-8fc75762241e\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n      \"location\": \"southeastasia\",\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n      \"name\": \"xplattestvmss5\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3099',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'b8c16405-c8e1-470e-81b0-65859367d6a2',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'ced4249f-3b13-4c81-87b6-e04d3ecb5d19',
  'x-ms-routing-request-id': 'WESTUS2:20170530T025423Z:ced4249f-3b13-4c81-87b6-e04d3ecb5d19',
  date: 'Tue, 30 May 2017 02:54:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Compute/virtualMachineScaleSets?api-version=2017-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"sku\": {\r\n        \"name\": \"Standard_DS1\",\r\n        \"tier\": \"Standard\",\r\n        \"capacity\": 10\r\n      },\r\n      \"properties\": {\r\n        \"singlePlacementGroup\": true,\r\n        \"upgradePolicy\": {\r\n          \"mode\": \"Manual\"\r\n        },\r\n        \"virtualMachineProfile\": {\r\n          \"osProfile\": {\r\n            \"computerNamePrefix\": \"test\",\r\n            \"adminUsername\": \"azureuser\",\r\n            \"windowsConfiguration\": {\r\n              \"provisionVMAgent\": true,\r\n              \"enableAutomaticUpdates\": true\r\n            },\r\n            \"secrets\": []\r\n          },\r\n          \"storageProfile\": {\r\n            \"osDisk\": {\r\n              \"createOption\": \"FromImage\",\r\n              \"caching\": \"None\",\r\n              \"managedDisk\": {\r\n                \"storageAccountType\": \"Premium_LRS\"\r\n              }\r\n            },\r\n            \"imageReference\": {\r\n              \"publisher\": \"MicrosoftWindowsServer\",\r\n              \"offer\": \"WindowsServer\",\r\n              \"sku\": \"2012-R2-Datacenter\",\r\n              \"version\": \"latest\"\r\n            },\r\n            \"dataDisks\": [\r\n              {\r\n                \"lun\": 0,\r\n                \"createOption\": \"Empty\",\r\n                \"caching\": \"None\",\r\n                \"managedDisk\": {\r\n                  \"storageAccountType\": \"Premium_LRS\"\r\n                },\r\n                \"diskSizeGB\": 32\r\n              }\r\n            ]\r\n          },\r\n          \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Network/virtualNetworks/xplattestvnet3238/subnets/xplattestsubnet7150\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]},\r\n          \"extensionProfile\": {\r\n            \"extensions\": [\r\n              {\r\n                \"properties\": {\r\n                  \"publisher\": \"Microsoft.Compute\",\r\n                  \"type\": \"VMAccessAgent\",\r\n                  \"typeHandlerVersion\": \"2.0\",\r\n                  \"autoUpgradeMinorVersion\": true,\r\n                  \"settings\": {}\r\n                },\r\n                \"name\": \"test\"\r\n              },\r\n              {\r\n                \"properties\": {\r\n                  \"publisher\": \"Microsoft.Compute\",\r\n                  \"type\": \"BGInfo\",\r\n                  \"typeHandlerVersion\": \"2.1\",\r\n                  \"autoUpgradeMinorVersion\": true\r\n                },\r\n                \"name\": \"test1\"\r\n              }\r\n            ]\r\n          }\r\n        },\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"overprovision\": false,\r\n        \"uniqueId\": \"5f4869d7-1fe8-48be-b9c1-8fc75762241e\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n      \"location\": \"southeastasia\",\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n      \"name\": \"xplattestvmss5\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3099',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'ebbe49a0-16d9-4ce3-a5e2-7fe0e2744a89',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'a253f90e-3ac5-4192-a614-02746f5fb9d4',
  'x-ms-routing-request-id': 'WESTUS2:20170530T025424Z:a253f90e-3ac5-4192-a614-02746f5fb9d4',
  date: 'Tue, 30 May 2017 02:54:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Compute/virtualMachineScaleSets?api-version=2017-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"sku\": {\r\n        \"name\": \"Standard_DS1\",\r\n        \"tier\": \"Standard\",\r\n        \"capacity\": 10\r\n      },\r\n      \"properties\": {\r\n        \"singlePlacementGroup\": true,\r\n        \"upgradePolicy\": {\r\n          \"mode\": \"Manual\"\r\n        },\r\n        \"virtualMachineProfile\": {\r\n          \"osProfile\": {\r\n            \"computerNamePrefix\": \"test\",\r\n            \"adminUsername\": \"azureuser\",\r\n            \"windowsConfiguration\": {\r\n              \"provisionVMAgent\": true,\r\n              \"enableAutomaticUpdates\": true\r\n            },\r\n            \"secrets\": []\r\n          },\r\n          \"storageProfile\": {\r\n            \"osDisk\": {\r\n              \"createOption\": \"FromImage\",\r\n              \"caching\": \"None\",\r\n              \"managedDisk\": {\r\n                \"storageAccountType\": \"Premium_LRS\"\r\n              }\r\n            },\r\n            \"imageReference\": {\r\n              \"publisher\": \"MicrosoftWindowsServer\",\r\n              \"offer\": \"WindowsServer\",\r\n              \"sku\": \"2012-R2-Datacenter\",\r\n              \"version\": \"latest\"\r\n            },\r\n            \"dataDisks\": [\r\n              {\r\n                \"lun\": 0,\r\n                \"createOption\": \"Empty\",\r\n                \"caching\": \"None\",\r\n                \"managedDisk\": {\r\n                  \"storageAccountType\": \"Premium_LRS\"\r\n                },\r\n                \"diskSizeGB\": 32\r\n              }\r\n            ]\r\n          },\r\n          \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Network/virtualNetworks/xplattestvnet3238/subnets/xplattestsubnet7150\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]},\r\n          \"extensionProfile\": {\r\n            \"extensions\": [\r\n              {\r\n                \"properties\": {\r\n                  \"publisher\": \"Microsoft.Compute\",\r\n                  \"type\": \"VMAccessAgent\",\r\n                  \"typeHandlerVersion\": \"2.0\",\r\n                  \"autoUpgradeMinorVersion\": true,\r\n                  \"settings\": {}\r\n                },\r\n                \"name\": \"test\"\r\n              },\r\n              {\r\n                \"properties\": {\r\n                  \"publisher\": \"Microsoft.Compute\",\r\n                  \"type\": \"BGInfo\",\r\n                  \"typeHandlerVersion\": \"2.1\",\r\n                  \"autoUpgradeMinorVersion\": true\r\n                },\r\n                \"name\": \"test1\"\r\n              }\r\n            ]\r\n          }\r\n        },\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"overprovision\": false,\r\n        \"uniqueId\": \"5f4869d7-1fe8-48be-b9c1-8fc75762241e\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n      \"location\": \"southeastasia\",\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5481/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n      \"name\": \"xplattestvmss5\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3099',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'ebbe49a0-16d9-4ce3-a5e2-7fe0e2744a89',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'a253f90e-3ac5-4192-a614-02746f5fb9d4',
  'x-ms-routing-request-id': 'WESTUS2:20170530T025424Z:a253f90e-3ac5-4192-a614-02746f5fb9d4',
  date: 'Tue, 30 May 2017 02:54:23 GMT',
  connection: 'close' });
 return result; }]];