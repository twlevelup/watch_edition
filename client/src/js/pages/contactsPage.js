const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const compiledTemplate = require('../../templates/contactsPage.hbs')

class ContactsPage extends BasePage {

  pageWillLoad() {
    this.contacts = StorageHub.getData('contacts')
  }

  template() {
    const context = {
      contacts: this.contacts,
    };
    return compiledTemplate(context);
  }

  leftButtonEvent() {
    this.navigate('/');
  }
}

module.exports = ContactsPage;
