const AudioHub = require("../src/AudioHub");

describe("AudioHub", () => {

  let audioHub;
  const beep = './framework/src/sounds/sound.mp3'

  beforeEach(() => {
    audioHub = new AudioHub();
  })

  xit('should throw an error when providing a non-existant filepath', () => {
    expect(() => {
      audioHub.playSound('beep', 'fake');
    }).toThrow();
  })

  it('should play a sound', () => {
    const audioMock = { play: jest.fn() };
    window.Audio = jest.fn(() => audioMock);
    audioHub.playSound(beep)
    expect( window.Audio).toBeCalledWith(beep);
    expect(audioMock.play).toHaveBeenCalled();
  })

  it('should change the volume of a sound', () => {
    audioHub.playSound(beep)
    audioHub.volumeModify('beep', 0.3)
    expect(audioHub.store['beep'].volume).toEqual(0.3);
  })

  xit('should throw an error when giving a value higher than 1 for volume', () => {
    audioHub.playSound(beep)
    expect(() => {
      audioHub.volumeModify('beep', 5)
    }).toThrow();
  })

  xit('should throw an error when giving a value lower than 0 for volume', () => {
    audioHub.playSound(beep)
    expect(() => {
      audioHub.volumeModify('beep', -2)
    }).toThrow();
  })
});
