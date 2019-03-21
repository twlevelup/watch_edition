const StorageHub = require('./src/StorageHub');

const StorageHubInstance = new StorageHub();

module.exports = {
  getData: StorageHubInstance.getData,
  setData: StorageHubInstance.setData,
  reset: StorageHubInstance.reset,
  setDebug: StorageHubInstance.setDebug,
  find: StorageHubInstance.find,
  setJSON: StorageHubInstance.setJSON
}
