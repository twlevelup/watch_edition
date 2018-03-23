
require('../styles/main.scss');
require('../fonts/fonts.scss');
const createNotificationHandlers = require('./notificationHandler').createNotificationHandlers;

module.exports = class App {
  constructor(routes, notifications) {
    this.routes = routes;
    this.watchFace = document.getElementById("watch-face");
    this.leftButton = document.getElementById("button-left");
    this.rightButton = document.getElementById("button-right");
    this.topButton = document.getElementById("button-top");
    this.bottomButton = document.getElementById("button-bottom");
    this.navigate = this.navigate.bind(this);
    this.notificationHandler = createNotificationHandlers(notifications);
  }

  navigateToLocation(location) {
    let path = location.hash.slice(1);
    if (path === "") {
      path = "/";
    }
    this.navigate(path, {});
  }

  clearEventListeners() {
    this.leftButton.removeEventListener("click", this.leftListener)
    this.rightButton.removeEventListener("click", this.rightListener)
    this.topButton.removeEventListener("click", this.topListener)
    this.bottomButton.removeEventListener("click", this.bottomListener)
    this.watchFace.removeEventListener("click", this.faceListener)
  }

  setupEventListeners(page) {
    this.leftListener = this.leftButton.addEventListener("click", page.leftButtonEvent.bind(page));
    this.rightListener = this.rightButton.addEventListener("click", page.rightButtonEvent.bind(page));
    this.topListener = this.topButton.addEventListener("click", page.topButtonEvent.bind(page));
    this.bottomListener = this.bottomButton.addEventListener("click", page.bottomButtonEvent.bind(page));
    this.faceListener = this.watchFace.addEventListener("click", page.faceButtonEvent.bind(page));
  }

  navigate(path, props = {}) {
    const Page = this.routes[path] || this.routes["404"];
    const page = new Page({
      ...props,
      navigate: this.navigate,
      watchFace: this.watchFace,
      notificationHandler: this.notificationHandler,
    });

    this.clearEventListeners();
    this.setupEventListeners(page);

    this.notificationHandler.hide();
    page.pageWillLoad();
    this.watchFace.innerHTML = page.template();
    page.pageDidLoad();
    window.location.hash = path;
  }
};
