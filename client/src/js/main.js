'use strict';

require('../styles/main.scss');
require('../fonts/fonts.scss');

require('watch_framework/src/backbone-collection-iterator');

var App = require('./app'),
  NotificationsForm = require('watch_framework/src/watchNotificationsForm'),
  notificationsFormConfig = require('./config/watchNotificationsFormConfig');

var notificationsForm = new NotificationsForm();
notificationsForm.configureNotifications(notificationsFormConfig);

App.start();
