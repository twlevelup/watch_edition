'use strict';

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
  this.activeNotification = this.notifications[opts.type];

  // TODO this is where we should probably make a new notification from the constructor instead
  this.activeNotification.messages = opts.message;
  this.activeNotification.render();
};

NotificationHandler.prototype.hideNotification = function() {
  if (this.activeNotification) {
    this.activeNotification.remove();
    this.activeNotification = undefined;
  }
};

module.exports = exports = NotificationHandler;
