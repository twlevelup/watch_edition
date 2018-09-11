const AudioHub = require('./src/AudioHub');

const AudioHubInstance = new AudioHub();

module.exports = {
  playSound: AudioHubInstance.playSound,
}