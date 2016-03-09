'use strict';

var ViewWithButtons = require('./viewWithButtons'),
  eventHub = require('./eventHub');

var WatchNotification = ViewWithButtons.extend({

  initialize: function(opts) {
    this.message = opts && opts.message;
  },

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

    // TODO make this configurable
    $('#watch-face').append(this.$el);

    this.configureButtons();
    return this;
  },

  hide: function() {
    eventHub.trigger('hideNotification');
  }

});

module.exports = WatchNotification;
