var App = require('./app'),
  NotificationsForm = require('./framework/notificationsForm'),
  notificationsFormConfig = require('./notifications/notificationsFormConfig');

var notificationsForm = new NotificationsForm();
notificationsForm.configureNotifications(notificationsConfig);

App.start();
