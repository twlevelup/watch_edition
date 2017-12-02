const App = require('../src/js/app');
const $ = require('jquery');

fdescribe('App', () => {
  document.body.innerHTML = `<div id='watch-face'></div>`;

  describe('#navigateToLocation', () => {
    it('strips location path and navigates to page', () => {
      class DummyPage {
        createElement() {
          const element = document.createElement('div');
          element.innerHTML = 'Some page';
          return element;
        }
      }
      const app = new App({ 'teamRocket': DummyPage }, $('#watch-face'));
      // dummy window.location object. https://developer.mozilla.org/en-US/docs/Web/API/Location
      app.navigateToLocation({
        href: 'http://localhost:8080/#teamRocket',
        hash: '#teamRocket',
      });
      let element = document.getElementById('watch-face');
      expect(element.innerHTML).toBe('<div>Some page</div>');
    });

    describe('url has no trailing paths', () => {
      it('goes to home page', () => {
        class DummyPage {
          createElement() {
            const element = document.createElement('div');
            element.innerHTML = 'Some page';
            return element;
          }
        }
        const app = new App({ '/': DummyPage }, $('#watch-face'));
        // dummy window.location object. https://developer.mozilla.org/en-US/docs/Web/API/Location
        app.navigateToLocation({
          href: 'http://localhost:8080/',
          hash: '',
        });
        let element = document.getElementById('watch-face');
        expect(element.innerHTML).toBe('<div>Some page</div>');
      });
    });
  });

  describe('#navigate', () => {
    it('should changes watch face to the specific page', () => {
      class DummyPage {
        createElement() {
          const element = document.createElement('div');
          element.innerHTML = 'hello world';
          return element;
        }
      }

      class DummyPage2 {
        constructor(props) {
          this.props = props;
        }
        createElement() {
          const element = document.createElement('div');
          element.innerHTML = this.props.message;
          return element;
        }
      }

      const routes = {
        '/': DummyPage,
        'someOtherPage': DummyPage2,
      };

      const app = new App(routes, $('#watch-face'));
      let element = document.getElementById('watch-face');

      app.navigate('/', {});
      expect(element.innerHTML).toBe(`<div>hello world</div>`);

      app.navigate('someOtherPage', { message: 'I like to move it move it'});
      expect(element.innerHTML).toBe(`<div>I like to move it move it</div>`);
    });

    it('shows 404 when path does not match any predefined routes', () => {
      class FourOhFour {
        createElement() {
          const element = document.createElement('div');
          element.innerHTML = `Oops, page not found`;
          return element;
        }
      }

      const routes = {
        '404': FourOhFour,
      };

      const app = new App(routes, $('#watch-face'));
      let element = document.getElementById('watch-face');

      app.navigate('someRandomPage', {});
      expect(element.innerHTML).toBe(`<div>Oops, page not found</div>`);
    });
  });
});
