const find = require("lodash/find");

const setupNotificationForm = require("./setupNotificationForm");
const BaseNotification = require("./BaseNotification");

module.exports = class NotificationCenter {
  constructor(notifications, render) {
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);

    this.notifications = notifications;
    this.render = render;

    this.container = document.getElementById("notification-container");

    setupNotificationForm(notifications, this.show);
  }

  show(type, props) {
    const foundNotification = find(this.notifications, { type }) || {};
    const Notification = foundNotification.view ? foundNotification.view : BaseNotification;
    this.render(this.container, Notification, props);
    this.container.hidden = false;
  }

  hide() {
    this.container.hidden = true;
  }
};
