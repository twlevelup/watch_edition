'use strict';

var NotificationsForm = Backbone.View.extend({

  el: '#notification-form',

  template: require('../../templates/framework/notificationForm.hbs'),
  notificationsCfg: [],

  notificationTypeEl: '.notification-type',
  notificationMessageEl: '.notification-message',

  // TODO what would happen if this was changed to initalize? would it just meant making the new view in each tests before each?
  configureNotifications: function(notifications) {
    this.notificationsCfg = notifications;

    _.bindAll(this, 'render', '_setDefaultMessage', 'triggerNotification');
    this.render();

    this._setupListeners();
    this._populateNotificationSelectOptions();
    this._setDefaultMessage();
  },

  _setupListeners: function() {
    this.$(this.notificationTypeEl).on('change', this._setDefaultMessage);
    this.$('#sendNotification').on('click', this.triggerNotification);
  },

  _populateNotificationSelectOptions: function() {
    var options = '';

    _.each(this.notificationsCfg, function(elem, index) {
      options += '<option value="' + index + '">' + elem.label + '</option>';
    });

    this.$(this.notificationTypeEl).html(options);
  },

  _setDefaultMessage: function() {
    var index = this.$(this.notificationTypeEl).val(),
      selectedNotification = this.notificationsCfg[index];

    var message = (selectedNotification && selectedNotification.defaultValue) ? selectedNotification.defaultValue : '';

    this.$(this.notificationMessageEl).val(message);

  },

  triggerNotification: function() {

    var notificationType = this.$(this.notificationTypeEl).val(),
      notificationMessage = this.$(this.notificationMessageEl).val();

    if (!notificationType) {
      return;
    }

    global.App.vent.trigger(notificationType, {message: notificationMessage});

  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = NotificationsForm;
