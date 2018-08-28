class StorageHub {
  constructor() {
    this.store = {};
    this.shouldDebug = false;
  }

  setDebug(shouldDebug) {
    this.shouldDebug = shouldDebug;
  }

  setData(field, value) {

    if (typeof field !== 'string') {
      throw new Error('First parameter must be a string')
    }

    if (this.shouldDebug) {
      console.debug('[StorageHub] Before:', this.store)
    }
    this.store = {
      ...this.store,
      [field]: value,
    }

    if (this.shouldDebug) {
      console.debug('[StorageHub] After:', this.store)
    }
  }

  getData(field) {
    return this.store[field];
  }

  reset() {
    this.store = {};
  }
}

module.exports = StorageHub;
