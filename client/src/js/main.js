'use strict';

require('../styles/main.scss');
require('../fonts/fonts.scss');

require('./framework/backbone-collection-iterator');

var App = require('./app'),
  NotificationsForm = require('./framework/watchNotificationsForm'),
  notificationsFormConfig = require('./config/watchNotificationsFormConfig');

var notificationsForm = new NotificationsForm();
notificationsForm.configureNotifications(notificationsFormConfig);

App.start();
