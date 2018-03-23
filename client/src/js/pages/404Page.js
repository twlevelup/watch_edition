const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/404Page.hbs');

class FourOhFourPage extends BasePage {
  template() {
    return compiledTemplate();
  }
  leftButtonEvent() {
    this.navigate('/');
  }
  rightButtonEvent() {
    this.navigate('/');
  }
  topButtonEvent() {
    this.navigate('/');
  }
  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = FourOhFourPage;
