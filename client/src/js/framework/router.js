'use strict';

var Router = Backbone.Router.extend({

  _loadNewView: function(view) {
    this.currentView = view;
    $('#watch-face').html(this.currentView.render().el);
    this.currentView.setButtonEvents();
  },

  renderView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }

    this._loadNewView(view);
  }

});

module.exports = Router;
