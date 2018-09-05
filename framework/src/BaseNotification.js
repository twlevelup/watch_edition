const BasePage = require('./BasePage');
const NotificationHub = require('../PublicNotificationHub');

class BaseNotification extends BasePage {
  template = require('../templates/baseNotification.hbs')
  
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
