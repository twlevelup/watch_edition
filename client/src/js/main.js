// TODO require vendor stuff here
// TODO require SASS stuff here

var App = require('./app'),
  NotificationsForm = require('./framework/watchNotificationsForm'),
  notificationsFormConfig = require('./watch-notifications/watchNotificationsFormConfig');

var notificationsForm = new NotificationsForm();
notificationsForm.configureNotifications(notificationsFormConfig);

App.start();
