const FourOhFourPage = require('./404Page');

describe('404Page', () => {
  let watchFace;

  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render my page correctly', () => {
      const page = new FourOhFourPage();
      expect(page.render()).toContain("<h1>Oops!</h1>");
    });
  });

  describe('#rightButtonEvent', () => {
    it('goes to root page', () => {
      const page = new FourOhFourPage();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to root page', () => {
      const page = new FourOhFourPage();
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });


  describe('#topButtonEvent', () => {
    it('goes to root page', () => {
      const page = new FourOhFourPage();
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('goes to root page', () => {
      const page = new FourOhFourPage();
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});
