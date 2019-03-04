class BasePage {

  template;

  constructor(props = {}) {
    this.props = props;
    Object.keys(props).forEach((key) => {
      this[key] = props[key];
    });
    this.watchFace = props.watchFace;
  }

  navigate(location) {
    this.navigate(location)
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

  // double clicks
  rightButtonEventDoubleClick() {
  }

  leftButtonEventDoubleClick() {
  }

  topButtonEventDoubleClick() {
  }

  bottomButtonEventDoubleClick() {
  }

  faceButtonEventDoubleClick() {
  }

  // long hold

  rightButtonEventHold() {
  }

  leftButtonEventHold() {
  }

  topButtonEventHold() {
  }

  bottomButtonEventHold() {
  }

  faceButtonEventHold() {
  }

}

module.exports = BasePage;
