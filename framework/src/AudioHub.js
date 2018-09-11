class AudioHub {

  playSound(path) {
    new Audio(path).play();
  }
}

module.exports = AudioHub;
