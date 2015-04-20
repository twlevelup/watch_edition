'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

var pageView = Backbone.View.extend({

  className: 'page',

  setButtonEvents: function() {
    _.each(this.buttonEvents, function(eventHandler, buttonID) {
      $('body').on('click', '#' + buttonID, this[eventHandler]);
    }, this);
  },

  // TODO simplify this
  removeButtonEvents: function() {
    $('body').off('click', '#a')
      .off('click', '#b')
      .off('click', '#c')
      .off('click', '#d')
      .off('click', '#watch-face');
  }

});

module.exports = pageView;
