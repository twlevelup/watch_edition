class BasePage {
  template;

  constructor(props = {}) {
    this.props = props;
    this.navigate = props.navigate;
    this.watchFace = props.watchFace;
  }

  pageWillLoad() {
  }

  render() {
    if (!this.template) {
      throw new Error("Template not defined: Did you forget `template = require('path/to/template.hbs');`?");
    }

    const context = JSON.parse(JSON.stringify(this))

    return this.template(context);
  }

  pageDidLoad() {
  }

  rightButtonEvent() {
  }

  leftButtonEvent() {
  }

  topButtonEvent() {
  }

  bottomButtonEvent() {
  }

  faceButtonEvent() {
  }
}

module.exports = BasePage;
