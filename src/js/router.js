'use strict';

var Backbone = require('backbone'),
  $ = require('jquery');

var HomeScreen = require('./views/homeScreen.js'),
  ConcactsScreen = require('./views/contactsScreen.js');

var Router = Backbone.Router.extend({

  routes: {
    contacts: 'contacts',
    '*actions': 'home'
  },

  home: function() {
    this.changeView(HomeScreen);
  },

  contacts: function() {
    this.changeView(ConcactsScreen);
  },

  resetButtons: function () {
    $('body').off('click', '#a')
      .off('click', '#b')
      .off('click', '#c')
      .off('click', '#d')
      .off('click', '#e');
  },

  changeView: function(view) {
    this.resetButtons();
    if (this.view) {
      this.view.remove();
    }
    this.view = new view();
    $('#watch-face').html(this.view.render().el);
  }

});

module.exports = Router;
