'use strict';

var Router = Backbone.Router.extend({

  // TODO move to app
  // TODO rename displayPage
  renderPage: function(page) {
    if (this.activePage) {
      this.activePage.remove();
    }

    this._changeactivePage(page);
  },

  // TODO move to app
  _changeactivePage: function(page) {
    this.activePage = page;
    // TODO make sure this takes in to account any active notifications, either re-render them or dismiss them
    // TODO make this work with the constructor
    // e.g. this.activePage = new New();
    $('#watch-face').html(this.activePage.render().el);
    this.activePage.configureButtons();
  },

  initialize: function(pages) {
    _.each(pages, this.createRouteForPage, this);
  },

  createRouteForPage: function(page, name) {
    var route = (name === 'home') ? '' : name;
    this.route(route, name, function() {
      this.renderPage(page);
    });
  }

});

module.exports = Router;
