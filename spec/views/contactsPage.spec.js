'use strict';

var ContactsPage = require('../../src/js/views/contactsPage');

describe('The Contacts Page', function() {

  var contactsPage;


  it('should have a contacts collection', function () {
    contactsPage = new ContactsPage();
    expect(contactsPage.contactsCollection).toBeDefined();
  });

});
