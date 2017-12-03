const UnimplementedError = require('../errors/UnimplementedError');

class BasePage {
  constructor(props) {
    this.navigate = props.navigate;
  }

  rightButtonEvent() {
    throw new UnimplementedError('rightButtonEvent');
  }

  leftButtonEvent() {
    throw new UnimplementedError('leftButtonEvent');
  }

  topButtonEvent() {
    throw new UnimplementedError('topButtonEvent');
  }

  bottomButtonEvent() {
    throw new UnimplementedError('bottomButtonEvent');
  }

  faceButtonEvent() {
    throw new UnimplementedError('faceButtonEvent');
  }
}

module.exports = BasePage;
