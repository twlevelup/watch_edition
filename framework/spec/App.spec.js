const spyObject = require('jest-spy-object');
const { marbles } = require('rxjs-marbles/jest');
const BasePage = require('../src/BasePage');
const watchTemplate = require('../templates/watch.hbs');
const NotificationHub = require('../src/NotificationHub');
const App = require('../src/App');

describe('App', () => {
  document.body.innerHTML = watchTemplate();

  let watch = {};
  let routes = {};
  let notifications = [
    { type: 'blah', label: 'test', defaultValue: '' }
  ];
  let app;

  class DummyPage extends BasePage {


    template = function(){
      return '<div>Some page</div>'
    }


    leftButtonEventHold() { }
    rightButtonEventHold() { }
    topButtonEventHold() { }
    bottomButtonEventHold() { }
    faceButtonEventHold() { }
  }

  class DummyPage2 extends BasePage {

    template = function (message) {
      return `<div>${message.message}</div>`;

    };

    pageWillLoad() {
      this.message = 'I like to move it move it'
    }

  }

  beforeEach(() => {
    watch = {
      watchFace: document.getElementById('watch-face'),
      leftButton: document.getElementById('button-left'),
      rightButton: document.getElementById('button-right'),
      topButton: document.getElementById('button-top'),
      bottomButton: document.getElementById('button-bottom'),
      pageBody: document.body,
    };
    routes = {
      'teamRocket': DummyPage,
    };
    NotificationHub.reset();
    app = new App(routes, notifications);
  });

  describe('#onhashchange', () => {
    it('should respond to window hashChangeEvent', () => {
      spyOn(app, 'renderPath').and.stub();
      window.onhashchange({ newURL: "http://localhost:8080/#teamRocket", oldURL: "http://localhost:8080/#"  })
      expect(app.renderPath).toHaveBeenCalledWith("teamRocket")
    })

    it('should not respond if the hash url has not changed', () => {
      spyOn(app, 'renderPath').and.stub();
      window.onhashchange({ newURL: "http://localhost:8080/#teamRocket", oldURL: "http://localhost:8080/#teamRocket" })
      expect(app.renderPath).not.toHaveBeenCalled();
    })
  })

  describe('#hideNotification', () => {
    it('rerenders the page when hiding notification', () => {
      app.routes = {
        'dummy2': DummyPage2,
      }

      const location = {
        href: 'http://localhost:8080/#1',
        hash: '#dummy2',
      };

      const props = { message: 'hello' };
      const renderPath = spyOn(app, 'renderPath').and.stub();

      app.navigateToLocation(location, props);
      expect(renderPath).toHaveBeenCalledWith('dummy2', props);
      expect(renderPath).toHaveBeenCalledTimes(1);
      NotificationHub.hide();
      expect(renderPath).toHaveBeenCalledWith('dummy2', props)
      expect(renderPath).toHaveBeenCalledTimes(2);
    });
  });

  describe('#navigateToLocation', () => {
    it('strips location path and navigates to page', () => {
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
        app.routes = {
          '/': DummyPage,
        };
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

  describe('event handling', () => {

    const expectOnlyOneEventCalled = (expected, params) => {
      expect(DummyPage.prototype[expected]).toHaveBeenCalledWith(params);
      Object.keys(DummyPage.prototype).forEach((key) => {
        if (key.match(/Event/) && key !== expected) {
          expect(DummyPage.prototype[key]).not.toHaveBeenCalled();
        }
      })
    }
    beforeEach(() => {
      app.routes = {
        '/': DummyPage,
        'someOtherPage': DummyPage2,
      };
      app.renderPath('/');
      spyObject(DummyPage.prototype);
    })

    describe('quick press', () => {

      const timeTaken = 10;
      it('registers page left button event', () => {
        app.handleEvent({ target: 'left', timeTaken });
        expectOnlyOneEventCalled('leftButtonEvent');
      });

      it('registers page right button event', () => {
        app.handleEvent({ target: 'right', timeTaken });
        expectOnlyOneEventCalled('rightButtonEvent');
      });

      it('registers page top button event', () => {
        app.handleEvent({ target: 'top', timeTaken });
        expectOnlyOneEventCalled('topButtonEvent');
      });

      it('registers page bottom button event', () => {
        app.handleEvent({ target: 'bottom', timeTaken });
        expectOnlyOneEventCalled('bottomButtonEvent');
      });

      it('registers page face button event', () => {
        app.handleEvent({ target: 'face', timeTaken });
        expectOnlyOneEventCalled('faceButtonEvent');
      });

      it('should print error for unknown method', () => {
        jest.spyOn(console, 'error');
        app.handleEvent({ target: 'surprise', timeTaken });
        expect(console.error).toBeCalledWith(`DummyPage needs 'surpriseButtonEvent()' to be defined.`)
      });
    })

    describe('long press', () => {

      const timeTaken = 1000;
      it('registers page left button event', () => {
        app.handleEvent({ target: 'left', timeTaken });
        expectOnlyOneEventCalled('leftButtonEventHold', { timeTaken });
      });

      it('registers page right button event', () => {
        app.handleEvent({ target: 'right', timeTaken });
        expectOnlyOneEventCalled('rightButtonEventHold', { timeTaken });
      });

      it('registers page top button event', () => {
        app.handleEvent({ target: 'top', timeTaken });
        expectOnlyOneEventCalled('topButtonEventHold', { timeTaken });
      });

      it('registers page bottom button event', () => {
        app.handleEvent({ target: 'bottom', timeTaken });
        expectOnlyOneEventCalled('bottomButtonEventHold', { timeTaken });
      });

      it('registers page face button event', () => {
        app.handleEvent({ target: 'face', timeTaken });
        expectOnlyOneEventCalled('faceButtonEventHold', { timeTaken });
      });
    })


    describe('observables', () => {
      beforeEach(() => {
        spyOn(app, 'handleEvent');
      })

      describe('merging watchDown$', () => {

        beforeEach(() => {
          jest.spyOn(Date, 'now')
            .mockReturnValueOnce(42)
            .mockReturnValueOnce(142)
        })

        it('should merge mouseDown and keyDown', marbles((m) => {
          app.watchMouseDown$ = m.hot('a', { a: 'left' })
          app.watchKeyDown$ = m.hot('---a', { a: 'left' })
          app.mergeEvents();
          m.expect(app.watchDown$).toBeObservable('x--y', { x: { target: 'left', timestamp: 42 }, y: { target: 'left', timestamp: 142 } });
        }))


        it('should merge mouseUp and keyUp', marbles((m) => {
          app.watchMouseUp$ = m.hot('a', { a: 'left' })
          app.watchKeyUp$ = m.hot('---a', { a: 'left' })
          app.mergeEvents();
          m.expect(app.watchUp$).toBeObservable('x--y', { x: { target: 'left', timestamp: 42 }, y: { target: 'left', timestamp: 142 } });
        }))

      })

      describe('watchClick$ subscription', () => {
        it('should only respond if events are down then up', marbles((m) => {
          app.watchDown$ = m.hot('a', { a: { target: 'left', timestamp: 12345 } })
          app.watchUp$ = m.hot('--b', { b: { target: 'left', timestamp: 12445 } })
          app.subscribeToEvents();
          m.expect(app.watchClick$).toBeObservable('--x', { x: { target: 'left', timeTaken: 100 } });
        }))

        it('should not respond to down event only', marbles((m) => {
          app.watchDown$ = m.hot('a', { a: { target: 'left', timestamp: 12345 } })
          app.watchUp$ = m.hot('--')
          app.subscribeToEvents();
          m.expect(app.watchClick$).toBeObservable('--')
        }))

        it('should not respond to up event only', marbles((m) => {
          app.watchDown$ = m.hot('')
          app.watchUp$ = m.hot('--a', { a: { target: 'left', timestamp: 12345 } })
          app.subscribeToEvents();
          m.expect(app.watchClick$).toBeObservable('--')
        }))
      })

    })

  })

  describe('#navigate', () => {

    beforeEach(() => {
      app.routes = {
        '/': DummyPage,
        'someOtherPage': DummyPage2,
      };
      app.renderPath('/');
    });

    it('should changes watch face to the specific page', () => {
      app.routes = {
        '/': DummyPage,
        'someOtherPage': DummyPage2,
      };

      let element = document.getElementById('watch-face');
      spyOn(DummyPage.prototype, 'render').and.callThrough();
      spyOn(DummyPage2.prototype, 'render').and.callThrough();

      app.renderPath('/', {});
      expect(element.innerHTML).toBe(`<div>Some page</div>`);
      expect(DummyPage.prototype.render).toHaveBeenCalledTimes(1);

      app.renderPath('someOtherPage');
      expect(element.innerHTML).toBe(`<div>I like to move it move it</div>`);
      expect(DummyPage2.prototype.render).toHaveBeenCalledTimes(1);
    });

    it('shows 404 when path does not match any predefined routes', () => {
      class FourOhFour extends BasePage {
        template = function () {
          return '<div>Oops, page not found</div>';
        }

      }

      app.routes = {
        '404': FourOhFour,
      };

      let element = document.getElementById('watch-face');

      app.renderPath('someRandomPage', {});
      expect(element.innerHTML).toBe(`<div>Oops, page not found</div>`);
    });

    it('should navigate to the Home page', () => {
      //const windowHash = spyOn(window.location.hash);
      app.navigate('/');
      expect(window.location.hash).toBe('#/');
    });

    it('should navigate to another page correctly', () => {
      //const windowHash = spyOn(window.location.hash);
      app.navigate('someOtherPage');
      expect(window.location.hash).toBe('#someOtherPage');
    });

  });
});

function createKeyUpEvent(keyCode) {
  const keyupEvent = new Event("keyup");
  keyupEvent.which = keyCode;
  return keyupEvent;
}
