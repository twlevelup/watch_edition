'use strict';

var Router = require('./router'),
  WatchFace = require('./framework/watchFace'),
  NotificationsPanel = require('./framework/notifications'),
  availableNotificationTypes = require('./notifications/notificationsConfig'),
  clock = require('./framework/clock');

var App = {

  buttons: ['left', 'right', 'top', 'bottom', 'face'],

  navigate: function (route) {
    App.router.navigate(route, true);
  },

  start: function() {

    this.router = new Router();

    this.watchFace = new WatchFace();
    this.notifications = new NotificationsPanel();
    this.notifications.configureNotifications(availableNotificationTypes);

    // FIXME Make a view for the watch and make these regular view events
    // Don't trigger them on the router
    $('#button-right').on('click', function() {
      App.router.currentView.trigger('right');
    });

    $('#button-top').on('click', function() {
      App.router.currentView.trigger('top');
    });

    $('#button-bottom').on('click', function() {
      App.router.currentView.trigger('bottom');
    });

    $('#button-left').on('click', function() {
      App.router.currentView.trigger('left');
    });

    $('#watch-face').on('click', function() {
      App.router.currentView.trigger('face');
    });

    clock.start();

    if(Backbone.history && !Backbone.History.started) {
      Backbone.history.start();
    }

  }

};

_.extend(App, Backbone.Events);

global.App = App;

module.exports = App;
