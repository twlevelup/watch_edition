'use strict';

var eventHub = require('./eventHub');

var viewWithButtons = Backbone.View.extend({

  // TODO deprecate this
  setButtonEvents: function() {
    _.each(this.buttonEvents, function(eventHandler, buttonID) {
      this.listenTo(eventHub, buttonID, this[eventHandler]);
    }, this);
  },

  // TODO make this the standard method name
  configureButtons: function() {
    this.setButtonEvents();
  }

});

module.exports = viewWithButtons;
