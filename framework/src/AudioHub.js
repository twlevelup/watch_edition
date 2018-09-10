class AudioHub {
  constructor() {
    this.store = {};
    this.shouldDebug = false;
  }

  setSound(name, path) {
    if (typeof name !== 'string' || typeof path !== 'string') {
      throw new Error('Parameters must be strings')
    }
    try {
      this.store = {
        ...this.store,
        [name]: new Audio(path),
      }
    } catch (error) {
      console.log(error);
    }
  }

  playSound(name) {
    if (!this.store[name]) {
      throw new Error('No audio reference found');
    }
    this.store[name].play();
  }

  volumeModify(name, percent) {
    if (percent < 0 || percent > 1) {
      throw new Error('Can only be between 0 and 1');
    }
    this.store[name].volume *= percent;
  }

  reset() {
    this.store = {};
  }
}

module.exports = AudioHub;
