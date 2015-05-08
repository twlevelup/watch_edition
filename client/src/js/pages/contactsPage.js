'use strict';

var PageView = require('../framework/page');

var ContactsCollection = require('../collections/contacts'),
  ContactView = require('../views/contact');

var ContactsView = PageView.extend({

  id: 'contacts',

  template: require('../../templates/pages/contacts.hbs'),

  buttonEvents: {
    right: 'goToHomePage',
    face: 'screenClickExample',
    left: 'back'
  },

  initialize: function() {
    var self = this;

    this.contactsCollection = new ContactsCollection();
    this.listenTo(this.contactsCollection, 'change', this.render);

    self.seedContacts();
  },

  seedContacts: function() {
    this.contactsCollection.push([
      {name: 'Adam', phoneNumber: '0431 111 111'},
      {name: 'James', phoneNumber: '0431 222 222'},
      {name: 'Marzena', phoneNumber: '0431 333 333'}
    ]);
  },

  screenClickExample: function() {
    this.$el.html('<div>Oh noes!</div>');
  },

  goToHomePage: function() {
    global.App.router.navigate('', true);
  },

  render: function() {

    this.$el.html(this.template());

    var contactsHTML = document.createDocumentFragment();

    this.contactsCollection.each(function(contact) {
      $(contactsHTML).append(this.createContactHTML(contact));
    }, this);

    this.$el.append(contactsHTML);

    return this;
  },

  createContactHTML: function(contact) {
      var view = new ContactView({
        model: contact
      });
      return view.render().el;
    }

}
);

module.exports = ContactsView;
