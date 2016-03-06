'use strict';

var Router = require('./framework/router'),
  WatchFace = require('./framework/watchFace'),
  eventHub = require('./framework/eventHub'),
  pages = require('./pages'),
  notifications = require('./watch-notifications'),
  WatchNotificationHandler = require('./framework/watchNotificationHandler'),
  clock = require('./framework/clock');

function App() {
  this.vent = eventHub;
  this.router = new Router(pages);
  this.watchFace = new WatchFace();
  this.notificationHandler = new WatchNotificationHandler(notifications);
}

App.prototype.navigate = function (route) {
  this.router.navigate(route, true);
};

App.prototype.showPage = function(page) {
  if (this.activePage) {
    this.activePage.remove();
  }

  this.notificationHandler.hideNotification();

  this.activePage = page;

  // TODO make this work with the constructor e.g. this.activePage = new New();
  $('#watch-face').html(this.activePage.render().el);
  this.vent.trigger('showPage');
};

App.prototype.configureButtons = function () {
  this.activePage.stopListening(); // NOTE do this here to prevent duplicate listeners
  if (this.notificationHandler.activeNotification) {
    this.notificationHandler.activeNotification.configureButtons();
  } else if (this.activePage) {
    this.activePage.configureButtons();
  }
};

App.prototype.setupEventHandlers = function () {
  this.listenTo(eventHub, 'showPage', this.configureButtons);
  this.listenTo(eventHub, 'showNotification', function (opts) {
    // TODO delegate/proxy the event instead?
    this.notificationHandler.showNotification(opts);
    this.configureButtons();
  });
  this.listenTo(eventHub, 'hideNotification', function (opts) {
    // TODO delegate/proxy the event instead?
    this.notificationHandler.hideNotification();
    this.configureButtons();
  });
};

App.prototype.start = function() {

  clock.start();

  this.setupEventHandlers();

  if (Backbone.history && !Backbone.History.started) {
    Backbone.history.start();
  }

};

var app = new App();

_.extend(app, Backbone.Events);

// FIXME this is a hack to resolve issue with the router design
window.App = app;

module.exports = app;
