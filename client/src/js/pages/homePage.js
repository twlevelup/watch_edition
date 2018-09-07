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
    const dateTime = this.getDateTime();
    this.date = dateTime.date;
    this.time = dateTime.time;
    this.logo = logo;
  }

  getDateTime() {
    const dateTime = new Date(Date.now()).toLocaleString().split(",");
    return { 
      date: dateTime[0], 
      time: dateTime[1] 
    };
  }

  updateTimeEverySecond() {
    setInterval(() => this.updateTimeDisplay(this.getDateTime), 1000);
  }

  updateTimeDisplay(getTime) {
    const clockTime = document.getElementsByClassName("clock-time");
    if (clockTime && clockTime[0]) {
      clockTime[0].textContent = this.getDateTime().time;
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