'use strict';

var ViewWithButtons = require('./viewWithButtons'),
  eventHub = require('./eventHub');

var WatchNotification = ViewWithButtons.extend({

  className: 'notification',

  template: require('../../templates/framework/watchNotification.hbs'),

  buttonEvents: {
    right: 'hide',
    left: 'hide',
    top: 'hide',
    bottom: 'hide',
    face: 'hide'
  },

  render: function() {

    this.$el.html(this.template({message: this.message}));

    $('#watch-face').append(this.$el);

    this.setButtonEvents();
    return this;
  },

  hide: function() {
    eventHub.trigger('hideNotification');
  }

});

module.exports = WatchNotification;
