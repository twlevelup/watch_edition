const BaseComponent = require('../../../BaseComponent');

class Contact extends BaseComponent {
  constructor(props = {}) {
    super(props);
    this.props = props;
  }

  template() {
    return `
      <span>Name: ${this.props.name}</span>
      <br />
      <span>Phone: ${this.props.phoneNumber}</span>
  `;
  }
}

module.exports = Contact;
