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

  it('should reset the hub', () => {
    audioHub.setSound('beep', './framework/src/sounds/sound.mp3')
    expect(audioHub.store['beep']).toBeInstanceOf(Audio);
    audioHub.reset()
    expect(audioHub.store).toEqual({});
  })

  it('should play a sound', () => {
    audioHub.setSound('beep', './framework/src/sounds/sound.mp3')
    const spy = jest.spyOn(audioHub.store['beep'], 'play');
    audioHub.playSound('beep')
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  })
});
