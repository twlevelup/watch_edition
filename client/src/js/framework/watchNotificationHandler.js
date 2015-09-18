'use strict';

// TODO figure out something to do with notification queing or blocking when one is already active

var eventHub = require('./eventHub');

function NotificationHandler(notifications) {

  _.extend(this, Backbone.Events);
  this.notifications = {};
  this.eventHub = eventHub;
  this.loadNotifications(notifications);

}

NotificationHandler.prototype._loadNotification = function(name, notification) {
  this.notifications[name] = notification;
  this.listenTo(eventHub, name, function(opts) {
    this.displayNotification(name, opts);
  });
};

NotificationHandler.prototype.loadNotifications = function(notifications) {
  _.each(notifications, function(view, name) {
    this._loadNotification(name, view);
  }, this);
};

NotificationHandler.prototype.displayNotification = function(name, opts) {
  var notification = this.notifications[name];
  notification.messages = opts.message;
  notification.render();
};

module.exports = exports = NotificationHandler;
