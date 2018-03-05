const ContactView = require('./components/contact');
const BasePage = require('../BasePage');

class ContactsPage extends BasePage {
  constructor(props) {
    super(props);
    this.contacts = props.contacts || [
      { name: 'Ray', phoneNumber: '0431 111 111' },
      { name: 'Sinan', phoneNumber: '0431 222 222' },
      { name: 'Jafari', phoneNumber: '0431 333 333' },
    ];
  }

  template() {
    return `
      <h1>Contacts</h1>
      <ul>
        ${this.contacts.map(contact =>
          `<li>${new ContactView(contact).template()}</li>`
          )
          .join('')}
      </ul>
    `;
  }

  leftButtonEvent() {
    this.navigate('/');
  }
}

module.exports = ContactsPage;
