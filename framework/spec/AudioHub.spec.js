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

  it('should throw an error when non-string path is given for a new sound', () => {
    expect(() => {
      audioHub.setSound('beep', null);
    }).toThrow();
  })

  it('should throw an error when non-string name is given for a new sound', () => {
    expect(() => {
      audioHub.setSound(0, './framework/src/sounds/sound.mp3');
    }).toThrow();
  })

  it('should throw an error when trying to play a sound with a non-string name', () => {
    expect(() => {
      audioHub.playSound(0, './framework/src/sounds/sound.mp3');
    }).toThrow();
  })

  xit('should throw an error when providing a non-existant filepath', () => {
    expect(() => {
      audioHub.playSound('beep', 'fake');
    }).toThrow();
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

  it('should change the volume of a sound', () => {
    audioHub.setSound('beep', './framework/src/sounds/sound.mp3')
    audioHub.volumeModify('beep', 0.3)
    expect(audioHub.store['beep'].volume).toEqual(0.3);
  })

  it('should throw an error when giving a value higher than 1 for volume', () => {
    audioHub.setSound('beep', './framework/src/sounds/sound.mp3');
    expect(() => {
      audioHub.volumeModify('beep', 5)
    }).toThrow();
  })

  it('should throw an error when giving a value lower than 0 for volume', () => {
    audioHub.setSound('beep', './framework/src/sounds/sound.mp3');
    expect(() => {
      audioHub.volumeModify('beep', -2)
    }).toThrow();
  })
});
