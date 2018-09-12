const AudioHub = require("../src/AudioHub");

describe("AudioHub", () => {

  let audioHub;
  const beep = './framework/src/sounds/sound.mp3'
  const audioMock = { play: jest.fn() }; 

  beforeEach(() => {
    audioHub = new AudioHub();
    window.Audio = jest.fn(() => audioMock);
  })

  it('should play a sound', () => {
    audioHub.playSound(beep);
    expect(window.Audio).toBeCalledWith(beep);
    expect(audioMock.play).toHaveBeenCalled();
  })

  it('should set a volume to the sound', () => {
    audioHub.playSound(beep, 0.5);
    expect(audioMock.volume).toEqual(0.5);
  })

  it('should throw an error when given a volume value outside of 0 and 1', () => {
    expect(() => {audioHub.playSound(beep, 1.5)}).toThrow();
    expect(() => {audioHub.playSound(beep, -2)}).toThrow();  
  })
});
