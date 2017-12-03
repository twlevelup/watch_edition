const HomePage = require('../../src/js/pages/homePage');
const $ = require('jquery');

describe('HomePage', () => {
  describe('#rightButtonEvent', () => {
    it('goes to contacts page', () => {
      const props = {
        navigate: () => {},
      };
      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('contacts');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('scrolls page down', () => {
      const $watchFace = $('#watch-face');
      spyOn($watchFace, 'animate');

      const props = {
        $watchFace,
      };

      const page = new HomePage(props);

      document.body.innerHTML = `
        <div id='watch-face' style='height: 100px'></div>
      `;

      page.bottomButtonEvent();

      expect($watchFace.animate).toHaveBeenCalledWith({
        scrollTop: '-=70px'
      });

    });
  });

  describe('#topButtonEvent', () => {
    it('scrolls page up', () => {
      const $watchFace = $('#watch-face');
      spyOn($watchFace, 'animate');

      const props = {
        $watchFace,
      };

      const page = new HomePage(props);

      document.body.innerHTML = `
        <div id='watch-face' style='height: 100px'></div>
      `;

      page.topButtonEvent();

      expect($watchFace.animate).toHaveBeenCalledWith({
        scrollTop: '-=70px'
      });
    });
  });
});
