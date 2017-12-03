const ContactView = require('../views/contact');
const BasePage = require('./BasePage');

class ContactsPage extends BasePage {
  constructor(props) {
    super(props);
    this.contacts = props.contacts || [
      { name: 'Adam', phoneNumber: '0431 111 111' },
      { name: 'James', phoneNumber: '0431 222 222' },
      { name: 'Marzena', phoneNumber: '0431 333 333' },
    ];
  }

  template() {
    return `
      <h1>Contacts</h1>
      <ul>
        ${this.contacts.map(contact =>
          `<li>${new ContactView(contact).template()}</li>`)
          .join('')}
      </ul>
    `;
  }

  leftButtonEvent() {
    this.navigate('/');
  }

  faceButton() {
    this.$el.html('<div>Oh noes!</div>');
  }
}

module.exports = ContactsPage;
