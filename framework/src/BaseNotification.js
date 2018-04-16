const BasePage = require('./BasePage');
const NotificationHub = require('../PublicNotificationHub');

const compiledTemplate = require('../templates/baseNotification.hbs')
class BaseNotification extends BasePage {
  template() {
    return compiledTemplate(this.props);
  }
  leftButtonEvent() {
    NotificationHub.hide();
  }
  rightButtonEvent() {
    NotificationHub.hide();
  }
  topButtonEvent() {
    NotificationHub.hide();
  }
  bottomButtonEvent() {
    NotificationHub.hide();
  }
  faceButtonEvent() {
    NotificationHub.hide();
  }
}

module.exports = BaseNotification;
