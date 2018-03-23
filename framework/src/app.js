
require('../styles/main.scss');
require('../fonts/fonts.scss');
module.exports = class App {
  constructor(routes, watch, notificationHandler) {
    this.routes = routes;
    this.watchFace = watch.watchFace;
    this.leftButton = watch.leftButton;
    this.rightButton = watch.rightButton;
    this.topButton = watch.topButton;
    this.bottomButton = watch.bottomButton;
    this.navigate = this.navigate.bind(this);
    this.notificationHandler = notificationHandler;
  }

  navigateToLocation(location) {
    let path = location.hash.slice(1);
    if (path === "") {
      path = "/";
    }
    this.navigate(path, {});
  }

  navigate(path, props = {}) {
    const Page = this.routes[path] || this.routes["404"];
    const page = new Page({
      ...props,
      navigate: this.navigate,
      watchFace: this.watchFace,
    });

    this.leftButton.addEventListener("click", page.leftButtonEvent.bind(page));
    this.rightButton.addEventListener("click", page.rightButtonEvent.bind(page));
    this.topButton.addEventListener("click", page.topButtonEvent.bind(page));
    this.bottomButton.addEventListener("click", page.bottomButtonEvent.bind(page));
    this.watchFace.addEventListener("click", page.faceButtonEvent.bind(page));

    this.notificationHandler.hide();
    page.pageWillLoad();
    this.watchFace.innerHTML = page.template();
    page.pageDidLoad();
    window.location.hash = path;
  }
};
