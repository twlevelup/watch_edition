const BasePage = require('./BasePage');
const compiledTemplate = require('../../templates/404Page.hbs');

class FourOhFourPage extends BasePage {
  template() {
    return compiledTemplate();
  }
}

module.exports = FourOhFourPage;
