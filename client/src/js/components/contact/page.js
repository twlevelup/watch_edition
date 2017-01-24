const Page = require('watch_framework').Page;

const ContactsCollection = require('./collection');
const ContactView = require('./view');

const template = require('./contactsPage.hbs');
const $ = require('jquery');

const contactsPage = Page.extend({

  id: 'contacts',

  template,

  buttonEvents: {
    right: 'goToHomePage',
    face: 'screenClickExample',
    left: 'back',
  },

  initialize() {
    this.contactsCollection = new ContactsCollection();
    this.seedContacts();
    this.render();
  },

  // TODO use jquery to load a JSON file async test?
  seedContacts() {
    this.contactsCollection.reset([
      { name: 'Adam', phoneNumber: '0431 111 111' },
      { name: 'James', phoneNumber: '0431 222 222' },
      { name: 'Marzena', phoneNumber: '0431 333 333' },
    ]);
  },

  screenClickExample() {
    this.$el.html('<div>Oh noes!</div>');
  },

  goToHomePage() {
    window.App.navigate('');
  },

  render() {
    this.$el.html(this.template());

    const contactsHTML = document.createDocumentFragment();

    this.contactsCollection.each(function collectionFunction(contact) {
      $(contactsHTML).append(this.createContactHTML(contact));
    }, this);

    this.$el.find('ul').html(contactsHTML);

    return this;
  },

  createContactHTML(contact) {
    const view = new ContactView({
      model: contact,
    });
    return view.render().el;
  },

});

module.exports = contactsPage;
