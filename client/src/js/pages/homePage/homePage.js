const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const logo = require('../../../images/logo.png');
const plop = './sounds/plop.mp3';

//test for raspberrypi
class HomePage extends BasePage {
  template = require('./homePage.hbs');

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
    const dateTime = new Date(Date.now()).toLocaleString('en-AU').split(",");
    return { 
      date: dateTime[0], 
      time: dateTime[1],
    };
  }

  updateTimeEverySecond() {
    setInterval(() => this.updateTimeDisplay(this.getDateTime), 1000);
  }

  updateTimeDisplay(getTime) {
    const clockTime = document.getElementById("clock-time");
    if (clockTime) {
      clockTime.textContent = getTime().time;
    }
  }

  rightButtonEvent() {
    this.navigate('contacts');
  }

  leftButtonEvent() {
    AudioHub.playSound(plop);
  }

  topButtonEvent() {
    this.watchFace.scrollTop -= 40;
  }

  bottomButtonEvent() {
    this.watchFace.scrollTop += 40;
  }
}

module.exports = HomePage;
