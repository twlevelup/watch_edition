'use strict';

var pageView = Backbone.View.extend({

  className: 'page',

  setButtonEvents: function() {
    _.each(this.buttonEvents, function(eventHandler, buttonID) {
      this.listenTo(this, buttonID, this[eventHandler]);
    }, this);
  },

  back: function() {
    history.back();
  }

});

module.exports = pageView;
