const Router = require('../src/js/router');
const pages = require('../src/js/pages');

describe('Router', () => {
  describe('#defaultRoute', () => {
    it('should navigate to page 404 if page not found', () => {
      const router = new Router(pages);
      window.App = { showPage: () => {} };
      spyOn(window.App, 'showPage');
      router.defaultRoute('somewhere random');
      expect(window.App.showPage).toHaveBeenCalledWith(pages['404']);
    });
  });
});
