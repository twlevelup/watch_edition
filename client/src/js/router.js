const Backbone = require('backbone');

const Router = Backbone.Router.extend({

  routes: {
    'eventDetails/:id': 'showEventDetails',
    '*other': 'defaultRoute',
  },

  initialize(pages) {
    this.pages = pages;

    // TODO call initialize on the parent router
    // this.prototype.initialize();
    // TODO merge routes with default routes
    // this.routes = _.merge(this.prototype.defaultRoutes);
  },

  defaultRoute(urlFragment) {
    const pageName = (!urlFragment) ? 'home' : urlFragment;
    const page = this.pages[pageName] || this.pages['404'];
    window.App.showPage(page);
  },

  showEventDetails(id) {
    window.App.showPage(this.pages.eventDetails, { cid: id });
  },

});

module.exports = Router;
