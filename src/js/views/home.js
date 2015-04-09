'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

var homeView = Backbone.View.extend({

  el: $('#watch-face'),

  template: require('../../templates/views/home.hbs'),

  initialize: function(){
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  }

});

module.exports = homeView;
