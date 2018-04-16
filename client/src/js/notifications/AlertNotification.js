const BaseNotification = require("watch-framework").BaseNotification;
const NotificationHub = require("watch-framework").NotificationHub;
const compiledTemplate = require("../../templates/AlertNotification.hbs");
module.exports = class AlertNotification extends BaseNotification {
  template() {
    const context = {
      message: this.props.message
    };
    return compiledTemplate(context);
  }

  leftButtonEvent() {
    console.log("LEFT");
    NotificationHub.hide();
  }
};
