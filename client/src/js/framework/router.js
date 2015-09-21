'use strict';

var Router = Backbone.Router.extend({

  initialize: function(pages) {
    _.each(pages, this.createRouteForPage, this);
  },

  // TODO use an event to remove dependency on globals or pass a reference in
  createRouteForPage: function(page, name) {
    var route = (name === 'home') ? '' : name;
    this.route(route, name, function() {
      global.App.displayPage(page);
    });
  }

});

module.exports = Router;
