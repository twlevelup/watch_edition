'use strict';

var NotificationView = require('./notification'),
  eventHub = require('./eventHub');

function NotificationHandler () {

  var notifications = {};

  // TODO probably want to use new instead and pass options through initialize
  // TODO figure out something to do with notification queing or blocking when one is active
  function _displayNotification (name, opts) {
    notifications[name].message = opts.message;
    notifications[name].render();
  }

  function _loadNotification(name, notification) {
      notifications[name] = notification;
      eventHub.on(name, function (opts) {
        _displayNotification(name, opts);
      });
  }

  return {

    notifications: notifications,

    loadNotification: _loadNotification,

    displayNotification: _displayNotification,

    loadNotifications: function () {

    }

  };

}

module.exports = exports = new NotificationHandler();
