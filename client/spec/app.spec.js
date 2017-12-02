const App = require('../src/js/app');
const $ = require('jquery');

fdescribe('App', () => {
  document.body.innerHTML = `<div id='watch-face'></div>`;

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
      expect(element.innerHTML).toBe('');

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
