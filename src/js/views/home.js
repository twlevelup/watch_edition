'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

var homeView = Backbone.View.extend({

  el: $('#watch-face'),

  initialize: function(){
    _.bindAll(this, 'render');
    this.render();
  },

  render: function(){
    $(this.el).append("<p>hello world</p>");
  }

});

module.exports = homeView;
