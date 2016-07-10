'use strict';

var watchFramework = require('watch_framework');
var Router = require('./router');
var WatchFace = watchFramework.WatchFace;
var eventHub = watchFramework.EventHub;
var pages = require('./pages');
var notifications = require('./watch-notifications');
var NotificationHandler = watchFramework.NotificationHandler;
var clock = watchFramework.Clock;

function App() {
  this.vent = eventHub;
  this.router = new Router(pages);
  this.watchFace = new WatchFace();
  this.notificationHandler = new NotificationHandler(notifications);
}

// TODO move to router?
App.prototype.navigate = function(route) {
  this.router.navigate(route, true);
};

// TODO move to router?
App.prototype.showPage = function(Page, options) {
  if (this.activePage) {
    this.activePage.remove();
  }

  this.notificationHandler.hideNotification();

  this.activePage =  new Page(options);

  $('#watch-face').html(this.activePage.render().el);
  this.vent.trigger('showPage');
};

App.prototype.configureButtons = function() {
  this.activePage.stopListening(); // NOTE do this here to prevent duplicate listeners
  if (this.notificationHandler.activeNotification) {
    this.notificationHandler.activeNotification.configureButtons();
  } else {
    this.activePage.configureButtons();
  }
};

App.prototype.setupEventHandlers = function() {
  this.listenTo(eventHub, 'showPage', this.configureButtons);
  this.listenTo(eventHub, 'showNotification', function(opts) {
    // TODO delegate/proxy the event instead?
    this.notificationHandler.showNotification(opts);
    this.configureButtons();
  });

  this.listenTo(eventHub, 'hideNotification', function(opts) {
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
