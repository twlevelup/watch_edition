const BaseComponent = require('../BaseComponent');

class BasePage extends BaseComponent {
  constructor(props = {}) {
    super(props);
    this.navigate = props.navigate;
    this.watchFace = props.watchFace;
  }

  pageWillLoad() {
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
