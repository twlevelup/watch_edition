const BasePage = require('./src/BasePage');
const BaseNotification = require('./src/BaseNotification');
const App = require('./src/App');
const PublicNotificationHub = require('./PublicNotificationHub');
const StorageHub = require('./PublicStorageHub');

module.exports = {
  BasePage,
  BaseNotification,
  App,
  NotificationHub: PublicNotificationHub,
  StorageHub,
};
