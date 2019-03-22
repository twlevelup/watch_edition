require('../styles/main.css');
require('../fonts/fonts.css');
const NotificationForm = require('./NotificationForm');
const NotificationHub = require('./NotificationHub');
const { getRxjsTarget, getRxjsTargetFromKey, getTimedEvent } = require('./rxjs/watchOperators');
const { fromEvent } = require('rxjs');
const { map, merge, switchMap, exhaustMap } = require('rxjs/operators');
import { default as MyMap } from '../src/MyMap';

module.exports = class App {
  constructor(routes, notifications) {
    this.navigate = this.navigate.bind(this);
    this.navigateToLocation = this.navigateToLocation.bind(this);
    this.render = this.render.bind(this);
    this.renderPath = this.renderPath.bind(this);
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
    customElements.define('my-map', MyMap);

    this.clicks = 0;
    this.clickTimeout = null;

    const hideNotification = () => {
      this.navigateToLocation(window.location, this.prevProps);
    }

    window.onhashchange = (hashChangeEvent) => {
      if (hashChangeEvent.newURL !== hashChangeEvent.oldURL) {
        const path = hashChangeEvent.newURL.split("#")[1];
        this.renderPath(path);
      }
    }

    NotificationHub.onHide(hideNotification);

    this.setupRxjsListeners();
  }

  navigateToLocation(location, props = {}) {
    let path = location.hash.slice(1);
    if (path === "") {
      path = "/";
    }
    this.renderPath(path, props);
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

  testClick(...args) {
    this.clicks++;
    if (this.clickTimeout) {
      if (this.clicks <= 2) {
        this.setClickTimeout(() => {this.handleDoubleClick(...args)});
      } else {
        this.setClickTimeout(() => {});
      }
    } else {
      console.log(this)
      this.setClickTimeout(() => {this.handleEvent(...args)});
    }
  }

  setClickTimeout(cb) {
    clearTimeout(this.clickTimeout);
    this.clickTimeout = setTimeout(() => {
      this.clickTimeout = null;
      this.clicks = 0;
      cb();
    }, 400);
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
    )
    this.watchClick$.subscribe((...args) => {this.testClick(...args)});
  }
  
  handleEvent({ target, timeTaken }) {
    let eventName = `${target}ButtonEvent`;
    let eventHandlerParams;
    if (timeTaken > 750) {
      eventName = `${eventName}Hold`;
      eventHandlerParams = { timeTaken };
    }
    const viewName = this.currentView.constructor.name;

    const eventHandler = this.currentView[eventName];
    if (eventHandler) {
      console.log(`Executing '${eventName}()' on ${viewName}`);
      eventHandler.bind(this.currentView)(eventHandlerParams);
    } else {
      console.error(`${viewName} needs '${eventName}()' to be defined.`);
    }
  }

  handleDoubleClick({ target, timeTaken }) {
    let eventName = `${target}ButtonEventDoubleClick`;
    let eventHandlerParams;
    const viewName = this.currentView.constructor.name;
    const eventHandler = this.currentView[eventName];
    if (eventHandler) {
      console.log(`Executing '${eventName}()' on ${viewName}`);
      eventHandler.bind(this.currentView)(eventHandlerParams);
    } else {
      console.error(`${viewName} needs '${eventName}()' to be defined.`);
    }
  }

  navigate(path) {
    window.location.hash = path;
  }

  render(element, ViewType, props) {
    this.prevProps = props;

    const view = new ViewType({
      ...props,
      navigate: this.navigate,
      watchFace: this.watchFace,
    });

    this.currentView = view;

    view.pageWillLoad();
    element.innerHTML = view.render();
    view.pageDidLoad();
  }

  renderPath(path,props){
    const Page = this.routes[path] || this.routes["404"];
    this.render(this.watchFace, Page, props);
  }
};
