require('../../styles/pages/home.scss');

const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const logo = require('../../images/logo.png')
const date = new Date(Date.now()).toLocaleString().split(",")[0];
const time = new Date(Date.now()).toLocaleString().split(",")[1];
const compiledTemplate = require("../../templates/homePage.hbs");

class HomePage extends BasePage {

  pageWillLoad() {
    AudioHub.setSound('bark', './client/src/sounds/Street-dogs-barking.mp3');
    StorageHub.setData('contacts', [
      { name: 'Ray', phoneNumber: '0431 111 111' },
      { name: 'Sinan', phoneNumber: '0431 222 222' },
      { name: 'Jafari', phoneNumber: '0431 333 333' },
    ])
  }
  
  template() {
    const context = {
      date: date,
      time: time,
      logo: logo,
    };
    return compiledTemplate(context);
  }

  rightButtonEvent() {
    this.navigate('contacts');
  }
  
  async leftButtonEvent() {
    await AudioHub.playSound('bark');
    AudioHub.volumeModify('bark', 0.9);
  }

  topButtonEvent() {
    this.watchFace.scrollTop -= 40;
  }

  bottomButtonEvent() {
    this.watchFace.scrollTop += 40;
  }
}

module.exports = HomePage;
