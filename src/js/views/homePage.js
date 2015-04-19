'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone'),
  PageView = require('../framework/page');

var homeScreen = PageView.extend({

  template: require('../../templates/views/home.hbs'),

  buttonEvents: {
    a: 'goToContacts'
  },

  goToContacts: function(e) {
    window.location.hash = '/contacts';
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = homeScreen;
