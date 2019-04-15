const { pipe } = require('rxjs');
const { map, filter, tap } = require('rxjs/operators');

const LEFT_ARROW_KEY = 37;
const UP_ARROW_KEY = 38;
const RIGHT_ARROW_KEY = 39;
const DOWN_ARROW_KEY = 40;
const SPACE_BAR_KEY = 32;

const KEY_MAPPINGS = {
  [LEFT_ARROW_KEY]: 'left',
  [RIGHT_ARROW_KEY]: 'right',
  [UP_ARROW_KEY]: 'top',
  [DOWN_ARROW_KEY]: 'bottom',
  [SPACE_BAR_KEY]: 'face',
}

const getRxjsTarget = () => pipe(
  map((event) => event.target.closest('[data-rxjs-target]')),
  filter((element) => !!element),
  map((element) => element.dataset.rxjsTarget),
)

const getRxjsTargetFromKey = () => pipe(
  filter((event) => !!(KEY_MAPPINGS[event.which]) && document.activeElement.id != 'notification-form-message'),
  tap((event) => event.preventDefault()),
  filter((event) => !event.repeat),
  map((event) => KEY_MAPPINGS[event.which]),
)

const getTimedEvent = () => pipe(
  map((target) => ({
    target,
    timestamp: Date.now(),
  })),
)

module.exports = {
  getRxjsTarget,
  getRxjsTargetFromKey,
  getTimedEvent,
}
