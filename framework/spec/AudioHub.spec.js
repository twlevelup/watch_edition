const AudioHub = require("../src/AudioHub");

describe("AudioHub", () => {

  let audioHub;

  beforeEach(() => {
    audioHub = new AudioHub();
  })

  it('should add sound to hub', () => {
    audioHub.setSound('beep', './framework/src/sounds/sound.mp3')
    expect(audioHub.store['beep']).toBeInstanceOf(Audio);
  })

  it('should play a sound in the hub', () => {
  })

  it('should reset the hub', () => {
    audioHub.setSound('beep', './framework/src/sounds/sound.mp3')
    expect(audioHub.store['beep']).toBeInstanceOf(Audio);
    audioHub.reset()
    expect(audioHub.store).toEqual({});
  })
});
