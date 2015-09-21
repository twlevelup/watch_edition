'use strict';

var Router = Backbone.Router.extend({

// TODO move to app
// TODO rename displayPage
  renderView: function(view) {
    if (this.activeView) {
      this.activeView.remove();
    }

    this._changeactiveView(view);
  },

// TODO move to app
  _changeactiveView: function(view) {
    this.activeView = view;
    // TODO make this work with the constructor
    // e.g. this.activeView = new New();
    $('#watch-face').html(this.activeView.render().el);
    this.activeView.configureButtons();
  },

  _createRouteForPage: function(page, name) {
    this.route(name, name, function() {this.renderView(page);});
  },

  initialize: function(pages) {
    var otherPages = _.omit(pages, 'home');

    this.route('', 'home', function() {this.renderView(pages.home);});

    _.each(otherPages, this._createRouteForPage, this);

  }

});

module.exports = Router;
