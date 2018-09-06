require('../../styles/pages/home.scss');

const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const logo = require('../../images/logo.png')

class HomePage extends BasePage {
  template = require('../../templates/homePage.hbs');

  pageWillLoad() {
    StorageHub.setData('contacts', [
      { name: 'Ray', phoneNumber: '0431 111 111' },
      { name: 'Sinan', phoneNumber: '0431 222 222' },
      { name: 'Jafari', phoneNumber: '0431 333 333' },
    ])

    const [date, time] = new Date(Date.now()).toLocaleString().split(",");
    this.date = date
    this.time = time
    this.logo = logo
  }

  rightButtonEvent() {
    this.navigate('contacts');
  }

  topButtonEvent() {
    this.watchFace.scrollTop -= 40;
  }

  bottomButtonEvent() {
    this.watchFace.scrollTop += 40;
  }
}

module.exports = HomePage;
