const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/contactsPage.hbs')

class ContactsPage extends BasePage {

  constructor(props = {}) {
    super(props);
    this.contacts = props.contacts || [
      { name: 'Ray', phoneNumber: '0431 111 111' },
      { name: 'Sinan', phoneNumber: '0431 222 222' },
      { name: 'Jafari', phoneNumber: '0431 333 333' },
    ];
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
