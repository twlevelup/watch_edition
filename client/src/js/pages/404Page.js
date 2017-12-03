const BasePage = require('./BasePage');

class FourOhFourPage extends BasePage {
  template() {
    return `
      <h1>Oops!</h1>
      <p>The page you're looking for could not be found.</p>
    `;
  }
}

module.exports = FourOhFourPage;
