require('../styles/main.scss');
require('../fonts/fonts.scss');

const escape = document.createElement("textarea");
const escapeHTML = html => {
  escape.textContent = html;
  return escape.innerHTML;
};

const routes = require("./routes");
const notifications = require("./notifications");
const App = require('./app');

const NotificationsForm = require("watch_framework").NotificationsForm;

const notificationsForm = new NotificationsForm();

notificationsForm.configureNotifications(notifications);

const watch = {
  watchFace: document.getElementById("watch-face"),
  leftButton: document.getElementById("button-left"),
  rightButton: document.getElementById("button-right"),
  topButton: document.getElementById("button-top"),
  bottomButton: document.getElementById("button-bottom"),
  notification: document.getElementById("notification"),
  notificationMessage: document.getElementById("notification-message-display"),
  notificationButtonOkay: document.getElementById("navigation-button-okay"),
  notificationButtonCancel: document.getElementById("navigation-button-cancel"),
  notificationFormSend: document.getElementById("sendNotification"),
  notificationFormMessage: document.getElementsByName("notification-message")[0],
};

const showNotification = (message) => {
  watch.notification.hidden = false;
  watch.notificationMessage.innerHTML = escapeHTML(message);
}

const hideNotification = () => {
  watch.notification.hidden = true;
}

watch.notificationFormSend.addEventListener("click", () => showNotification(watch.notificationFormMessage.value));
watch.notificationButtonOkay.addEventListener("click", hideNotification);
watch.notificationButtonCancel.addEventListener("click", hideNotification);

const notificationHandler = {
  show: showNotification,
  hide: hideNotification,
}

new App(routes, watch, notificationHandler)
  .navigateToLocation(window.location);
