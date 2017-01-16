require('../styles/main.scss');
require('../fonts/fonts.scss');

const App = require('./app');
const NotificationsForm = require('watch_framework').NotificationsForm;
const notificationsFormConfig = require('./config/watchNotificationsFormConfig');

const notificationsForm = new NotificationsForm();
notificationsForm.configureNotifications(notificationsFormConfig);

App.start();
