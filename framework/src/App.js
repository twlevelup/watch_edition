
require('../styles/main.css');
require('../fonts/fonts.css');
const NotificationForm = require('./NotificationForm');
const NotificationHub = require('./NotificationHub');
const { getRxjsTarget, getRxjsTargetFromKey, getTimedEvent } = require('./rxjs/watchOperators');
const { fromEvent } = require('rxjs');
const { map, merge, switchMap } = require('rxjs/operators');

module.exports = class App {
  constructor(routes, notifications) {
    this.navigate = this.navigate.bind(this);
    this.navigateToLocation = this.navigateToLocation.bind(this);
    this.render = this.render.bind(this);
    this.handleEvent = this.handleEvent.bind(this);

    this.routes = routes;
    this.notificationForm = new NotificationForm(notifications, this.render);

    this.watchFace = document.getElementById("watch-face");
    this.leftButton = document.getElementById("button-left");
    this.rightButton = document.getElementById("button-right");
    this.topButton = document.getElementById("button-top");
    this.bottomButton = document.getElementById("button-bottom");
    this.notificationContainer = document.getElementById("notification-container");
    this.wholePage = document.body;
    this.watchContainer = document.getElementById('watch');

    const hideNotification = () => {
      this.navigateToLocation(window.location, this.props);
    }

    window.onhashchange = (hashChangeEvent) => {
      const path = hashChangeEvent.newURL.split("#")[1];
      this.navigate(path);
    }

    NotificationHub.onHide(hideNotification);

    this.setupRxjsListeners();
  }

  navigateToLocation(location, props = {}) {
    let path = location.hash.slice(1);
    if (path === "") {
      path = "/";
    }
    this.navigate(path, props);
  }

  setupRxjsListeners() {
    this.watchMouseDown$ = fromEvent(this.watchContainer, 'mousedown').pipe(getRxjsTarget())
    this.watchMouseUp$ = fromEvent(this.watchContainer, 'mouseup').pipe(getRxjsTarget())
    this.watchKeyDown$ = fromEvent(this.wholePage, 'keydown').pipe(getRxjsTargetFromKey())
    this.watchKeyUp$ = fromEvent(this.wholePage, 'keyup').pipe(getRxjsTargetFromKey())

    this.mergeEvents();
    this.subscribeToEvents();
  }

  mergeEvents() {
    this.watchDown$ = this.watchMouseDown$.pipe(
      merge(this.watchKeyDown$),
      getTimedEvent(),
    );
    this.watchUp$ = this.watchMouseUp$.pipe(
      merge(this.watchKeyUp$),
      getTimedEvent(),
    );
  }

  subscribeToEvents() {
    this.watchClick$ = this.watchDown$.pipe(
      switchMap((downEvent) => this.watchUp$.pipe(
        map((upEvent) => {
          return {
            target: upEvent.target,
            timeTaken: upEvent.timestamp - downEvent.timestamp,
          }
        }),
      )),
    );

    this.watchClick$.subscribe(this.handleEvent)
  }

  handleEvent({ target, timeTaken }) {
    let eventName = `${target}ButtonEvent`;
    if (timeTaken > 750) {
      eventName = `${eventName}Hold`;
    }
    const viewName = this.currentView.constructor.name;

    const eventHandler = this.currentView[eventName];
    if (eventHandler) {
      // console.debug(`Executing '${eventName}()' on ${viewName}`);
      eventHandler.bind(this.currentView)()
    } else {
      console.error(`${viewName} needs '${eventName}()' to be defined.`);
    }
  }

  navigate(path, props = {}) {
    this.props = props;
    const Page = this.routes[path] || this.routes["404"];
    this.render(this.watchFace, Page, props);
    window.location.hash = path;
  }

  render(element, ViewType, props) {

    const view = new ViewType({
      ...props,
      navigate: this.navigate,
      watchFace: this.watchFace,
    })

    this.currentView = view;

    view.pageWillLoad();
    element.innerHTML = view.render();
    view.pageDidLoad();
  }
};
