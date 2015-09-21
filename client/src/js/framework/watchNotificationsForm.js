'use strict';

var eventHub = require('./eventHub');

var NotificationsForm = Backbone.View.extend({

  el: '#notification-form',

  template: require('../../templates/framework/watchNotificationForm.hbs'),
  config: [],

  notificationTypeEl: '.notification-type',
  notificationMessageEl: '.notification-message',

  // TODO what would happen if this was changed to initalize? would it just meant making the new view in each tests before each?
  configureNotifications: function(notifications) {
    this.config = notifications;

    _.bindAll(this, 'render', '_setDefaultMessage', 'triggerNotification');
    this.render();

    this._setupListeners();
    this._populateNotificationMenu();
    this._setDefaultMessage();
  },

  _setupListeners: function() {
    this.$(this.notificationTypeEl).on('change', this._setDefaultMessage);
    this.$('#sendNotification').on('click', this.triggerNotification);
  },

  _populateNotificationMenu: function() {
    var options = '';

    _.each(this.config, function(elem, index) {
      options += '<option value="' + index + '">' + elem.label + '</option>';
    });

    this.$(this.notificationTypeEl).html(options);
  },

  _setDefaultMessage: function() {
    var index = this.$(this.notificationTypeEl).val(),
      selectedNotification = this.config[index];

    var message = (selectedNotification && selectedNotification.defaultValue) ? selectedNotification.defaultValue : '';

    this.$(this.notificationMessageEl).val(message);

  },

  triggerNotification: function() {

    var notificationIndex = this.$(this.notificationTypeEl).val(),
      notificationType = this.config[notificationIndex].notificationType,
      notificationMessage = this.$(this.notificationMessageEl).val();

    if (!notificationType) {
      return;
    }

    eventHub.trigger(notificationType, {message: notificationMessage});

  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = NotificationsForm;
