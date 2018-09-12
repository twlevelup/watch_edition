class AudioHub {

  playSound(filepath, volume=1) {
    let sound = new Audio(filepath)
    if (volume <= 1 && volume >= 0) {  
      sound.volume = volume;
    } else {
      throw new Error("Enter volume between 0 and 1")
    }
    sound.play();
  }
}

module.exports = AudioHub;
