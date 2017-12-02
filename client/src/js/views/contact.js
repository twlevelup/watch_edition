class Contact {
  constructor(props) {
    this.name = props.name;
    this.phoneNumber = props.phoneNumber;
  }

  template() {
    return `
      <span>Name: ${this.name}</span>
      <br />
      <span>Phone: ${this.phoneNumber}</span>
  `;
  }

  createElement() {
    const element = document.createElement('div');
    element.innerHTML = this.template();
    return element;
  }
}

module.exports = Contact;
