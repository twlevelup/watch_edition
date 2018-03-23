const BasePage = require('./BasePage');
const compiledTemplate = require('../../templates/teamPage.hbs')
class TeamPage extends BasePage {
  template() {
    return compiledTemplate();
  }
}

module.exports = TeamPage;
