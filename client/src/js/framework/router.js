'use strict';

var Router = Backbone.Router.extend({

  _changeCurrentView: function(view) {
    this.currentView = view;
    $('#watch-face').html(this.currentView.render().el);
    this.currentView.setButtonEvents();
  },

  _createRouteForPage: function(page, name) {
    this.route(name, name, function() {this.renderView(page);});
  },

  renderView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }

    this._changeCurrentView(view);
  },

  initialize: function(pages) {
    var otherPages = _.omit(pages, 'home');

    this.route('', 'home', function() {this.renderView(pages.home);});

    _.each(otherPages, this._createRouteForPage, this);

  }

});

module.exports = Router;
