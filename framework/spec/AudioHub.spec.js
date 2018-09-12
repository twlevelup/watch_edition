const AudioHub = require("../src/AudioHub");

describe("AudioHub", () => {

  let audioHub;
  const beep = './framework/src/sounds/sound.mp3'

  beforeEach(() => {
    audioHub = new AudioHub();
  })

  it('should play a sound', () => {
    const audioMock = { play: jest.fn() };
    window.Audio = jest.fn(() => audioMock);
    audioHub.playSound(beep);
    expect(window.Audio).toBeCalledWith(beep);
    expect(audioMock.play).toHaveBeenCalled();
  })

  it('should set a volume to the sound', () => {
    const audioMock = { play: jest.fn() };
    window.Audio = jest.fn(() => audioMock);
    audioHub.playSound(beep, 0.5);
    expect(audioMock.volume).toEqual(0.5);
  })
});
