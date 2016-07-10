'use strict';

require('../styles/main.scss');
require('../fonts/fonts.scss');

var App = require('./app'),
  NotificationsForm = require('watch_framework').NotificationsForm,
  notificationsFormConfig = require('./config/watchNotificationsFormConfig');

var notificationsForm = new NotificationsForm();
notificationsForm.configureNotifications(notificationsFormConfig);

App.start();
