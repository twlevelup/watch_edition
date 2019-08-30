const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class MenuDetailsPage extends BasePage {
  template = require("./menuDetailsPage.hbs");

  pageWillLoad() {
    this.details = StorageHub.getData("selected");
    this.allMenuDetails = StorageHub.getData("menuDetails");
    this.name = this.details
    console.log('menu details', this.details);
    document.getElementById("clock-time");
    this.display();
  }

  display(){
    this.details = this.allMenuDetails.filter(menuItem => (menuItem.name == this.details.name))[0]
  }

  pageDidLoad() {}

  rightButtonEvent() {
  }

  leftButtonEvent() {
    this.navigate("menu");
  }

  topButtonEvent() {
    this.watchFace.scrollTop -= 40;
  }

  bottomButtonEvent() {
    this.watchFace.scrollTop += 40;
  }
}

module.exports = MenuDetailsPage;
