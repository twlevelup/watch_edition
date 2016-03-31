'use strict';

var Router = Backbone.Router.extend({

  initialize: function(pages) {
    this.pages = pages;
    _.each(pages, this.createRouteForPage, this);
  },

  // TODO define these somewhere else
  routes: {
    'eventDetails/:id': 'showEventDetails'
  },

  // TODO define these somewhere else
  showEventDetails: function(id) {
    window.App.showPage(this.pages.eventDetails, {cid: id});
  },

  // TODO use an event to remove dependency on globals or pass a reference in
  // TODO if showPage worked differently couldn't the router just be included anywhere and fix the dependency issues?
  createRouteForPage: function(page, name) {
    var route = (name === 'home') ? '' : name;
    this.route(route, name, function() {
      window.App.showPage(page);
    });
  }

});

module.exports = Router;
