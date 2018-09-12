class AudioHub {

  playSound(filepath, volume=1) {
    let sound = new Audio(filepath)
    sound.volume = volume;
    sound.play();
  }
  
}

module.exports = AudioHub;
