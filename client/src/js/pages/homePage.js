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

    this.updateTimeEverySecond();
    const [date, time] = getTime();
    this.date = date;
    this.time = time;
    this.logo = logo;
  }

  updateTimeEverySecond() {
    window.setInterval(this.updateTimeDisplay, 1000);
  }

  updateTimeDisplay() {
    const clockTime = document.getElementsByClassName("clock-time");
    if (clockTime && clockTime[0]) {
      clockTime[0].textContent = getTime()[1];
    }
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

function getTime() {
  return new Date(Date.now()).toLocaleString().split(",");
}