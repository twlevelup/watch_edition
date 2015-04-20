'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone'),
  PageView = require('../framework/page');

var homeScreen = PageView.extend({

  template: require('../../templates/views/home.hbs'),

  buttonEvents: {
    'button-right': 'goToContacts',
    'button-top': 'scrollUp',
    'button-bottom': 'scrollDown'
  },

  goToContacts: function(e) {
    window.location.hash = '/contacts';
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = homeScreen;
