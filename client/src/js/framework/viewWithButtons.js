'use strict';

var eventHub = require('./eventHub');

var viewWithButtons = Backbone.View.extend({

  configureButtons: function() {
    _.each(this.buttonEvents, function(eventHandler, buttonID) {
      this.listenTo(eventHub, buttonID, this[eventHandler]);
    }, this);
  }

});

module.exports = viewWithButtons;
