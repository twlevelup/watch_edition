class BasePage {
  template;

  constructor(props = {}) {
    this.props = props;
    Object.keys(props).forEach((key) => {
      this[key] = props[key];
    });
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

  keyEvent(key) {
    let command = key.which;

    switch(command) {
      case (37): // left arrow
        this.leftButtonEvent();
        break;
      case (39): // right arrow
        this.rightButtonEvent();
        break;
      case (38): // up arrow
        this.topButtonEvent();
        break;
      case (40): // down arrow
        this.bottomButtonEvent();
        break;
      case (32): // space
        this.faceButtonEvent();
        break;
      default:
    }
  }
}

module.exports = BasePage;
