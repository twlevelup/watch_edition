class AudioHub {
  constructor() {
    this.store = {};
    this.shouldDebug = false;
  }

  setSound(name, path) {
    if (typeof path !== 'string') {
      throw new Error('File path must be a string')
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

  playSound(name, path=undefined) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string')
    }

    if (path !== undefined) {
      this.setSound(name, path)
    }
    
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
