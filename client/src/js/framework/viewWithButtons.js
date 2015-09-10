'use strict';

var viewWithButtons = Backbone.View.extend({

  setButtonEvents: function() {

    _.each(this.buttonEvents, function(eventHandler, buttonID) {
      this.listenTo(global.App.vent, buttonID, this[eventHandler]);
    }, this);
  }

});

module.exports = viewWithButtons;
