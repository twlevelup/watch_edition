require('../styles/main.scss');
require('../fonts/fonts.scss');

const routes = require('./routes');
const App = require('./app');
const NotificationsForm = require('watch_framework').NotificationsForm;
const notificationsFormConfig = require('./config/watchNotificationsFormConfig');

const $ = require('jquery');

const notificationsForm = new NotificationsForm();
notificationsForm.configureNotifications(notificationsFormConfig);

new App(routes, $('#watch-face'))
  .navigateToLocation(window.location);
