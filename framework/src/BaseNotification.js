const BasePage = require('./BasePage');
const compiledTemplate = require('../templates/baseNotification.hbs')
class BaseNotification extends BasePage {
  template() {
    return compiledTemplate(this.props);
  }
  leftButtonEvent() {
    this.hideNotification();
  }
  rightButtonEvent() {
    this.hideNotification();
  }
  topButtonEvent() {
    this.hideNotification();
  }
  bottomButtonEvent() {
    this.hideNotification();
  }
  faceButtonEvent() {
    this.hideNotification();
  }
}

module.exports = BaseNotification;
