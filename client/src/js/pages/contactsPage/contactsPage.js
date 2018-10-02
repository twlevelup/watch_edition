const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class ContactsPage extends BasePage {
  template = require('./contactsPage.hbs');

  pageWillLoad() {
    this.contacts = StorageHub.getData('contacts')
  }

  leftButtonEvent() {
    this.navigate('/');
  }
}

module.exports = ContactsPage;
