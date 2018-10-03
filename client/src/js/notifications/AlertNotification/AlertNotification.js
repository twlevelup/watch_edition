const BaseNotification = require("watch-framework").BaseNotification;
const NotificationHub = require("watch-framework").NotificationHub;
module.exports = class AlertNotification extends BaseNotification {
  template = require("./AlertNotification.hbs");

  leftButtonEvent() {
    console.log("LEFT");
    NotificationHub.hide();
  }
};
