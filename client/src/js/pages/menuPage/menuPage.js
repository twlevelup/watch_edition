const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
Number.prototype.mod = function (n) {
  return ((this % n) + n) % n;
};

class MenuPage extends BasePage {
  template = require("./menuPage.hbs");
  tracker = 0;
  selected;
  list;

  pageWillLoad() {
    this.menuDetails = StorageHub.getData("menuDetails");
    document.getElementById("clock-time");
  }

  pageDidLoad(){
    this.list = document.getElementsByClassName("menu");
    this.selected = this.menuDetails[this.tracker];
    this.selectItem();
  }

  selectItem(item = 0) {
    const currentItem = this.list[item];
    currentItem.setAttribute("data-selected", true);
  }

  unselectItem(item) {
    const currentItem = this.list[item];
    currentItem.setAttribute("data-selected", false);
  }

  move(direction) {
    this.unselectItem(this.tracker);
    const numMenuItems = this.menuDetails.length;
    this.tracker = (this.tracker + direction).mod(numMenuItems)
    this.selected = this.menuDetails[this.tracker];
    this.selectItem(this.tracker);
  }

  rightButtonEvent() {
    this.navigate("menuDetails");
    StorageHub.setData("selected", this.selected);

  }

  topButtonEvent() {
    this.move(-1);
  }

  bottomButtonEvent() {
    this.move(1);
  }
}

module.exports = MenuPage;
