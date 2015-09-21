'use strict';

var ViewWithButtons = require('./viewWithButtons');

var WatchNotification = ViewWithButtons.extend({

  className: 'notification',

  template: require('../../templates/framework/watchNotification.hbs'),

  buttonEvents: {
    right: '',
    left: '',
    top: '',
    bottom: '',
    face: ''
  },

  render: function() {

    this.$el.html(this.template({message: this.message}));

    $('#watch-face').append(this.$el);

    this.setButtonEvents();
    return this;
  }

});

module.exports = WatchNotification;
