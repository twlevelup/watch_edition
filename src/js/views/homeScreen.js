'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone'),
  PageView = require('./page');

var homeScreen = PageView.extend({

  template: require('../../templates/views/home.hbs'),

  a: function(e) {
    window.location.hash = '/contacts';
  },

  initialize: function() {
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {

    this.$el.html(this.template());

    $('body').on('click', '#a', this.a);

    return this;

  }

});

module.exports = homeScreen;
