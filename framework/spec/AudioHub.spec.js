const AudioHub = require("../src/AudioHub");

describe("AudioHub", () => {

  let audioHub;

  beforeEach(() => {
    audioHub = new AudioHub();
  })

  it('should add new sound to the audio hub', () => {
    audioHub.playSound('beep', './framework/src/sounds/sound.mp3')
    expect(audioHub.store['beep']).toBeInstanceOf(Audio);
  })

  it('should throw an error when no path is given for a new sound', () => {
    expect(() => {
      audioHub.playSound('beep');
    }).toThrow();
  })

  it('should reset the hub', () => {
    audioHub.playSound('beep', './framework/src/sounds/sound.mp3')
    expect(audioHub.store['beep']).toBeInstanceOf(Audio);
    audioHub.reset()
    expect(audioHub.store).toEqual({});
  })

  it('should play a sound', () => {
    audioHub.playSound('beep', './framework/src/sounds/sound.mp3')
    const spy = jest.spyOn(audioHub.store['beep'], 'play');
    audioHub.playSound('beep')
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  })
});
