'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone'),
  PageView = require('../framework/page');

var homeScreen = PageView.extend({

  template: require('../../templates/views/home.hbs'),

  buttonEvents: {
    a: 'goToContacts',
    d: 'scrollUp',
    c: 'scrollDown'
  },

  goToContacts: function(e) {
    window.location.hash = '/contacts';
  },

  scrollUp: function() {
    console.log("scrolling");
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  scrollDown: function() {
    console.log("scrolling");
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = homeScreen;
