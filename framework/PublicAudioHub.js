const AudioHub = require('./src/AudioHub');

const AudioHubInstance = new AudioHub();

module.exports = {
  setSound: AudioHubInstance.setSound,
  playSound: AudioHubInstance.playSound,
  reset: AudioHubInstance.reset,
  volumeModify: AudioHubInstance.volumeModify,
}