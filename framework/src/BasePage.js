class BasePage {
  static LEFT_ARROW_KEY = 37;
  static RIGHT_ARROW_KEY = 39;
  static UP_ARROW_KEY = 38;
  static DOWN_ARROW_KEY = 40;
  static SPACE_BAR_KEY = 32;

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
      case (BasePage.LEFT_ARROW_KEY): // left arrow
        this.leftButtonEvent();
        break;
      case (BasePage.RIGHT_ARROW_KEY): // right arrow
        this.rightButtonEvent();
        break;
      case (BasePage.UP_ARROW_KEY): // up arrow
        this.topButtonEvent();
        break;
      case (BasePage.DOWN_ARROW_KEY): // down arrow
        this.bottomButtonEvent();
        break;
      case (BasePage.SPACE_BAR_KEY): // space
        this.faceButtonEvent();
        break;
      default:
    }
  }
}

module.exports = BasePage;
