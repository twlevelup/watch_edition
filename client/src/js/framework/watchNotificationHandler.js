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

NotificationHandler.prototype.displayNotification = function(name, opts) {
  this.activeNotification = this.notifications[name];
  // TODO this is where we should probably make a new notification from the constructor instead
  this.activeNotification.messages = opts.message;
  this.activeNotification.render();
};

NotificationHandler.prototype.hideActiveNotification = function () {
  if (this.activeNotification) {
    this.activeNotification.remove();    
  }
};






module.exports = exports = NotificationHandler;
