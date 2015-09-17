'use strict';

var Router = require('./framework/router'),
  WatchFace = require('./framework/watchFace'),
  eventHub = require('./framework/eventHub'),
  pages = require('./pages'),
  NotificationView = require('./framework/notification'),
  notificationHandler = require('./framework/notificationHandler'),
  clock = require('./framework/clock');

var App = {

  vent: eventHub,

  router: new Router(pages),

  watchFace: new WatchFace(),

  // TODO replace this with an event
  navigate: function (route) {
    App.router.navigate(route, true);
  },

  // TODO Make a view for the watch and make these regular view events
  setupWatchButtons: function () {

    var buttons = ['left', 'right', 'top', 'bottom'];

    _.each(buttons, function (buttonName) {
      $('#button-' + buttonName).on('click', function() {
        App.vent.trigger(buttonName);
      });
    });

    $('#watch-face').on('click', function() {
      App.vent.trigger('face');
    });
  },

  start: function() {

    // TODO remove this, just for testing
    var DummyNotification = NotificationView.extend({});
    notificationHandler.loadNotification('dummyNotification', new DummyNotification());

    this.setupWatchButtons();

    clock.start();

    if (Backbone.history && !Backbone.History.started) {
      Backbone.history.start();
    }

  }

};

global.App = App;

module.exports = App;
