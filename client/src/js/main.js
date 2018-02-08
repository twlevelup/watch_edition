require('../styles/main.scss');
require('../fonts/fonts.scss');

const routes = require('./routes');
const App = require('./app');
const NotificationsForm = require('watch_framework').NotificationsForm;

const notificationsForm = new NotificationsForm();
notificationsForm.configureNotifications([
  {
    notificationType: "alert",
    label: "alert",
    defaultValue: "This is a test alert"
  }
]);

const watch = {
  watchFace: document.getElementById('watch-face'),
  leftButton: document.getElementById('button-left'),
  rightButton: document.getElementById('button-right'),
  topButton: document.getElementById('button-top'),
  bottomButton: document.getElementById('button-bottom'),
};

new App(routes, watch)
  .navigateToLocation(window.location);
