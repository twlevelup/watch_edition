module.exports = class BaseComponent {
  constructor(props) {
    this.props = props;
  }
  template() {
    throw new Error('Unimplemented template');
  }
}
