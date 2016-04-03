'use strict';

// TODO rename notification centre
// TODO register event handlers for hiding and showing notifications

function NotificationHandler(notifications) {
  this.notifications = {};
  this.loadNotifications(notifications);
}

NotificationHandler.prototype._loadNotification = function(name, notification) {
  this.notifications[name] = notification;
};

NotificationHandler.prototype.loadNotifications = function(notifications) {
  _.each(notifications, function(view, name) {
    this._loadNotification(name, view);
  }, this);
};

NotificationHandler.prototype.showNotification = function(opts) {
  var Notification = this.notifications[opts.type];
  this.activeNotification = new Notification(opts);
  this.activeNotification.render();
};

NotificationHandler.prototype.hideNotification = function() {
  if (this.activeNotification) {
    this.activeNotification.remove();
    this.activeNotification = undefined;
  }
};

module.exports = NotificationHandler;
