'use strict';

var PageView = require('../framework/page');

var homeScreen = PageView.extend({

  template: require('../../templates/views/home.hbs'),

  buttonEvents: {
    'button-right': 'goToContacts',
    'button-top': 'scrollUp',
    'button-bottom': 'scrollDown',
    'button-left': 'back'
  },

  goToContacts: function(e) {
    global.router.navigate('contacts', true);
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = homeScreen;
