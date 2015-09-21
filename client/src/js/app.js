'use strict';

var Router = require('./framework/router'),
  WatchFace = require('./framework/watchFace'),
  eventHub = require('./framework/eventHub'),
  pages = require('./pages'),
  WatchNotification = require('./framework/watchNotification'),
  WatchNotificationHandler = require('./framework/watchNotificationHandler'),
  clock = require('./framework/clock');

// TODO remove this, just for testing
var DummyNotification = WatchNotification.extend({});

var App = {

  vent: eventHub,

  router: new Router(pages),

  watchFace: new WatchFace(),

  // TODO load these from the watch-notifications directory
  // TODO pass in a reference to the element where notifications should be displayed
  notificationHandler: new WatchNotificationHandler({dummyNotification: new DummyNotification()}),

  navigate: function (route) {
    App.router.navigate(route, true);
  },

  showPage: function(page) {
    if (this.activePage) {
      this.activePage.remove();
    }

    this.notificationHandler.hideNotification();

    this.activePage = page;

    // TODO make this work with the constructor e.g. this.activePage = new New();
    $('#watch-face').html(this.activePage.render().el);
    eventHub.trigger('showPage');
  },

  configureButtons: function () {
    this.activePage.stopListening(); // NOTE do this here to prevent duplicate listeners
    if (this.notificationHandler.activeNotification) {
      this.notificationHandler.activeNotification.configureButtons();
    } else if (this.activePage) {
      this.activePage.configureButtons();
    }
  },

  setupEventHandlers: function () {
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
  },

  start: function() {

    clock.start();

    this.setupEventHandlers();

    if (Backbone.history && !Backbone.History.started) {
      Backbone.history.start();
    }

  }

};

_.extend(App, Backbone.Events);

global.App = App;

module.exports = App;
