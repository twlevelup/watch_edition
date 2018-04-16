const EventEmitter = require('events').EventEmitter;
const eventEmitter = new EventEmitter();
const HIDE_EVENT = 'hideNotification';
const SHOW_EVENT = 'showNotification';

module.exports = {
  getEventEmitter: () => eventEmitter,
  hide: () => {
    eventEmitter.emit(HIDE_EVENT)
  },
  onHide: (handler) => {
    eventEmitter.on(HIDE_EVENT, handler)
  },
  show: (...props) => {
    eventEmitter.emit(SHOW_EVENT, ...props)
  },
  onShow: (handler) => {
    eventEmitter.on(SHOW_EVENT, handler)
  },
  reset: () => {
    eventEmitter.removeAllListeners(SHOW_EVENT)
    eventEmitter.removeAllListeners(HIDE_EVENT)
  }
}
