const { marbles } = require('rxjs-marbles/jest');
const watchOperators = require('./watchOperators');

describe('watchOperators', () => {
  it('getRxjsTarget', marbles((m) => {
    const leftTarget = { dataset: { rxjsTarget: 'left' } };
    const rxjsTargetWithClosest = { ...leftTarget, closest: () => leftTarget };
    const nonRxjsTargetWithClosest = { closest: () => leftTarget };

    const inputs = {
      a: { target: rxjsTargetWithClosest },
      b: { target: nonRxjsTargetWithClosest },
    };

    const source = m.hot('a--b', inputs);

    const piped = source.pipe(watchOperators.getRxjsTarget());

    m.expect(piped).toBeObservable('x--x', { x: 'left' });
  }))

  it('getRxjsTargetFromKey', marbles((m) => {
    const preventDefault = jest.fn();
    const inputs = {
      u: { preventDefault, which: 38 },
      d: { preventDefault, which: 40 },
      l: { preventDefault, which: 37 },
      r: { preventDefault, which: 39 },
      f: { preventDefault, which: 32 },
      o: { preventDefault, which: 234 },
      p: { preventDefault, which: 38, repeat: true },
    }

    const outputs = {
      u: 'top',
      d: 'bottom',
      l: 'left',
      r: 'right',
      f: 'face',
    }

    const source = m.hot('uppp-lo-d-f--r', inputs);

    const piped = source.pipe(watchOperators.getRxjsTargetFromKey());

    m.expect(piped).toBeObservable('u----l--d-f--r', outputs);
  }))

  it('getTimedEvent', marbles((m) => {

    jest.spyOn(Date, 'now').mockReturnValue(135);
    const inputs = {
      u: 'left',
    }

    const outputs = {
      u: { target: 'left', timestamp: 135 },
    }

    const source = m.hot('u', inputs);

    const piped = source.pipe(watchOperators.getTimedEvent());

    m.expect(piped).toBeObservable('u', outputs);
  }))
})
