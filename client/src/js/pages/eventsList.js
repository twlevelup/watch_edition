const Menu = require('watch_framework').Menu;
const storage = require('../../storage');

// NOTE you can use a custom template like any other backbone page
// NOTE you can load JSON files by modifying src/storage/index.js

const eventsList = Menu.extend({

  id: 'test-menu',

  buttonEvents: {
    right: 'select',
    left: 'back',
    top: 'previous',
    bottom: 'next',
  },

  getMenuItemLabel(menuItem) {
    return menuItem.get('name');
  },

  select() {
    // TODO make the router a singleton?
    // TODO move showPage in to the router, might be able to get rid of the activePage stuff too
    // TODO include it at the top level instead of inside the app?
    window.App.navigate(`eventDetails/${this.selected.cid}`);
  },

  collection: storage.eventsData,

});

module.exports = eventsList;
