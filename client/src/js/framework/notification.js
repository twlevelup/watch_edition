'use strict';

var ViewWithButtons = require('./viewWithButtons');

var notification = ViewWithButtons.extend({

  className: 'notification',

  template: require('../../templates/framework/notification.hbs'),

  render: function() {
    // TODO use setElement instead?
    // $('#watch-face').html(this.currentView.render().el);

    this.$el.html(this.template({message: this.message}));

    $('#watch-face').append(this.$el);

    this.setButtonEvents();
    return this;
  },

  cancel: function() {
    global.App.router.currentView.setButtonEvents();
    this.remove();
  }

});

module.exports = notification;
