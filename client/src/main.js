const { createNotificationHandler, App } = require('watch-framework');

const routes = require("./js/routes");
const notifications = require("./js/notifications");

const watch = {
  watchFace: document.getElementById("watch-face"),
  leftButton: document.getElementById("button-left"),
  rightButton: document.getElementById("button-right"),
  topButton: document.getElementById("button-top"),
  bottomButton: document.getElementById("button-bottom"),
};

const notificationHandler = createNotificationHandler("notification-form", notifications);

new App(routes, watch, notificationHandler).navigateToLocation(window.location);
