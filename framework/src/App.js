
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
    this.notificationHandler = createNotificationHandlers(notifications);
    this.navigate = this.navigate.bind(this);
    this.clearEventListeners = this.clearEventListeners.bind(this);
    this.setupEventListeners = this.setupEventListeners.bind(this);
  }

  navigateToLocation(location) {
    let path = location.hash.slice(1);
    if (path === "") {
      path = "/";
    }
    this.navigate(path, {});
  }

  clearEventListeners() {
    this.leftButton.removeEventListener("click", this.leftListener);
    this.rightButton.removeEventListener("click", this.rightListener);
    this.topButton.removeEventListener("click", this.topListener);
    this.bottomButton.removeEventListener("click", this.bottomListener);
    this.watchFace.removeEventListener("click", this.faceListener);
  }

  setupEventListeners(page) {
    this.leftListener = page.leftButtonEvent.bind(page);
    this.rightListener = page.rightButtonEvent.bind(page);
    this.topListener = page.topButtonEvent.bind(page);
    this.bottomListener = page.bottomButtonEvent.bind(page);
    this.faceListener = page.faceButtonEvent.bind(page);

    this.leftButton.addEventListener("click", this.leftListener);
    this.rightButton.addEventListener("click", this.rightListener);
    this.topButton.addEventListener("click", this.topListener);
    this.bottomButton.addEventListener("click", this.bottomListener);
    this.watchFace.addEventListener("click", this.faceListener);
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
