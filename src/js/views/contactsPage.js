'use strict';

var Backbone = require('backbone'),
 $ = require('jquery');

Backbone.$ = $;

var PageView = require('../framework/page');

var ContactsCollection = require('../collections/contacts'),
  ContactView = require('./contact');

var ContactsView = PageView.extend({

  template: require('../../templates/views/contacts.hbs'),

  buttonEvents: {
    right: 'goToHomePage',
    face: 'screenClickExample',
    left: 'back'
  },

  initialize: function() {
    this.contactsCollection = new ContactsCollection();
    this.loadContacts();
  },

  loadContacts: function() {
    this.contactsCollection.push([
      {name: 'Adam', phoneNumber: '0431 111 111'},
      {name: 'Sam', phoneNumber: '0431 222 222'},
      {name: 'Shaheedha', phoneNumber: '0431 333 333'}
    ]);
  },

  screenClickExample: function() {
    alert('you should NEVER use alerts!');
  },

  // FIXME use changeview on the app/router
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
