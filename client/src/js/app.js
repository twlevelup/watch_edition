const watchFramework = require('watch_framework');
const Router = require('./router');
const pages = require('./pages');
const notifications = require('./watch-notifications');
const Backbone = require('backbone');
const _ = require('underscore');
const $ = require('jquery');

const WatchFace = watchFramework.WatchFace;
const NotificationHandler = watchFramework.NotificationHandler;
const clock = watchFramework.Clock;

class App {
  constructor(eventHub, router, watchFace, notificationHandler) {
    this.vent = eventHub;
    this.router = router;
    this.watchFace = watchFace;
    this.notificationHandler = notificationHandler;
  }

  static init() {
    return new App(
      watchFramework.EventHub,
      new Router(pages),
      new WatchFace(),
      new NotificationHandler(notifications),
    );
  }

  navigate(route) {
    this.router.navigate(route, true);
  }

  showPage(Page, options) {
    if (this.activePage) {
      this.activePage.remove();
    }

    this.notificationHandler.hideNotification();

    this.activePage = new Page(options);

    $('#watch-face').html(this.activePage.render().el);
    this.vent.trigger('showPage');
  }

  configureButtons() {
    this.activePage.stopListening(); // NOTE do this here to prevent duplicate listeners
    if (this.notificationHandler.activeNotification) {
      this.notificationHandler.activeNotification.configureButtons();
    } else {
      this.activePage.configureButtons();
    }
  }

  setupEventHandlers() {
    this.listenTo(this.vent, 'showPage', this.configureButtons);
    this.listenTo(this.vent, 'showNotification', function showNotification(opts) {
      // TODO delegate/proxy the event instead?
      this.notificationHandler.showNotification(opts);
      this.configureButtons();
    });

    this.listenTo(this.vent, 'hideNotification', function hideNotification() {
      // TODO delegate/proxy the event instead?
      this.notificationHandler.hideNotification();
      this.configureButtons();
    });
  }

  start() {
    clock.start();

    this.setupEventHandlers();

    if (Backbone.history && !Backbone.History.started) {
      Backbone.history.start();
    }
  }
}

const app = App.init();

_.extend(app, Backbone.Events);

// FIXME this is a hack to resolve issue with the router design
window.App = app;

module.exports = app;
