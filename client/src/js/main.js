require('../styles/main.scss');
require('../fonts/fonts.scss');
const createNotificationHandler = require('../../../framework/watchSetup').createNotificationHandler;

const routes = require("./routes");
const notifications = require("./notifications");
const App = require('./app');

const watch = {
  watchFace: document.getElementById("watch-face"),
  leftButton: document.getElementById("button-left"),
  rightButton: document.getElementById("button-right"),
  topButton: document.getElementById("button-top"),
  bottomButton: document.getElementById("button-bottom"),
};

const notificationHandler = createNotificationHandler("notification-form", notifications);

new App(routes, watch, notificationHandler)
  .navigateToLocation(window.location);
