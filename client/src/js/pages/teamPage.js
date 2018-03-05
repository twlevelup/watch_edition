const BasePage = require('./BasePage');

class TeamPage extends BasePage {
  template() {
    return `
      <h1>Made by:</h1>
      <ul>
          <!-- TODO: Add your name as a list element -->
          <li>Ray</li>
      </ul>
    `;
  }
}

module.exports = TeamPage;

//Hello change
