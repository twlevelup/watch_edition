'use strict';

var NotificationsPanel = Backbone.View.extend({

  el: '#notification-panel',

  template: require('../../templates/framework/notificationPanel.hbs'),
  notificationsArray: [],

  ACTION_SELECT_SELECTOR: 'select[name="notification_action"]',
  MESSAGE_TEXTAREA_SELECTOR: 'textarea[name="notification_message"]',
  SEND_BUTTON_SELECTOR: '#button-sendNotification',

  configureNotifications: function(availableNotificationTypes) {
    this.notificationsArray = availableNotificationTypes;

    _.bindAll(this, 'render');
    this.render();

    this._configureListeners();
    this._populateNotificationSelectOptions();
  },

  _configureListeners: function() {
    $(this.SEND_BUTTON_SELECTOR).on('click', _.bind(this._sendNotification, this));
    $(this.ACTION_SELECT_SELECTOR).on('change', _.bind(this._populateDefaultMessageText, this));
  },

  _populateNotificationSelectOptions: function() {
    var option = '';

    _.each(this.notificationsArray, function(elem) {
      option += '<option>' + elem.name + '</option>';
    });

    $(this.ACTION_SELECT_SELECTOR).append(option);
  },

  _sendNotification: function(event) {
    var notificationAction = $(this.ACTION_SELECT_SELECTOR).val(),
      notificationMessage = $(this.MESSAGE_TEXTAREA_SELECTOR).val();

    //console.log("Notification Sent! Option: ", notificationAction, " Message: ", notificationMessage);
  },

  _populateDefaultMessageText: function() {
    var selectedValue = $(this.ACTION_SELECT_SELECTOR).val(),
      selectedNotificationType = _.findWhere(this.notificationsArray, {name: selectedValue});
    if (selectedNotificationType && selectedNotificationType.defaultMessage) {
      $(this.MESSAGE_TEXTAREA_SELECTOR).val(selectedNotificationType.defaultMessage);
    }
  },

  render: function() {
    this.$el.append(this.template());
    return this;
  }

});

module.exports = NotificationsPanel;
