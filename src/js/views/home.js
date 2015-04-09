'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

var homeScreen = Backbone.View.extend({

  // el: $('#watch-face'),

  template: require('../../templates/views/home.hbs'),

  a: function (e) {
    window.location.hash = '/contacts';
  },

  initialize: function(){
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    // this.$el.html(this.template());

    $('#watch-face').html(this.template());

    $('#a').click(this.a);
    $('#b').click(this.b);
    $('#c').click(this.c);
    $('#d').click(this.d);
    $('#e').click(this.e);

  }

});

module.exports = homeScreen;
