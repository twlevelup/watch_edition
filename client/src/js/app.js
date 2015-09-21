'use strict';

var Router = require('./framework/router'),
  WatchFace = require('./framework/watchFace'),
  eventHub = require('./framework/eventHub'),
  pages = require('./pages'),
  NotificationView = require('./framework/watchNotification'),
  NotificationHandler = require('./framework/watchNotificationHandler'),
  clock = require('./framework/clock');

// TODO remove this, just for testing
var DummyNotification = NotificationView.extend({});

var App = {

  vent: eventHub,

  router: new Router(pages),

  watchFace: new WatchFace(),

  // TODO load these from the watch-notifications directory
  // TODO pass in a reference to the element where notifications should be displayed
  notificationHandler: new NotificationHandler({dummyNotification: new DummyNotification()}),

  navigate: function (route) {
    App.router.navigate(route, true);
  },

  displayPage: function(page) {
    if (this.activePage) {
      this.activePage.remove();
    }

    this.notificationHandler.hideActiveNotification();

    this.activePage = page;

    // TODO make this work with the constructor
    // e.g. this.activePage = new New();
    $('#watch-face').html(this.activePage.render().el);
    this.configureButtons();
  },

  // TODO view / notification display should set the statuses
  // TODO view navigation should call configure Buttons?
  // TODO any action trigured relating to a notiifcation should call configureButtons?

  configureButtons: function () {
    // if (this.notificationHandler.activeNotification) {
    //   this.notification.activeNotification.configureButtons();
    // } else if (this.activePage) {
      this.activePage.configureButtons();
    // }
  },

  start: function() {

    clock.start();

    if (Backbone.history && !Backbone.History.started) {
      Backbone.history.start();
    }

  }

};

global.App = App;

module.exports = App;
