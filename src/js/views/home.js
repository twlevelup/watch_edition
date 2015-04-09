'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

var homeScreen = Backbone.View.extend({

  el: $('#watch-face'),

  template: require('../../templates/views/home.hbs'),

  a: function (e) {
    window.console.log('a');
  },

  b: function (e) {
    window.console.log('b');
  },

  c: function (e) {
    window.console.log('c');
  },

  d: function (e) {
    window.console.log('d');
  },

  e: function (e) {
    window.console.log('e');
  },

  initialize: function(){
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    this.$el.html(this.template());

    $('#a').click(this.a);
    $('#b').click(this.b);
    $('#c').click(this.c);
    $('#d').click(this.d);
    $('#e').click(this.e);

  }

});

module.exports = homeScreen;
