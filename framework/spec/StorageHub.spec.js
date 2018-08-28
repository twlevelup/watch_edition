const StorageHub = require("../src/StorageHub");

describe("StorageHub", () => {

  let storageHub;

  beforeEach(() => {
    storageHub = new StorageHub();
  })

  it('should setData without limits on type', () => {
    storageHub.setData('hello', 'world')
    expect(storageHub.getData('hello')).toEqual('world');
    storageHub.setData('hello', { random: 'json' })
    expect(storageHub.getData('hello')).toEqual({ random: 'json' });
    storageHub.setData('hello', ['1', 2, '3'])
    expect(storageHub.getData('hello')).toEqual(['1', 2, '3']);
  })

  it('should only accept string as the field parameter', () => {
    expect(() => storageHub.setData([], 'world')).toThrowError('First parameter must be a string')
    expect(() => storageHub.setData(undefined, 'world')).toThrowError('First parameter must be a string')
    expect(() => storageHub.setData(null, 'world')).toThrowError('First parameter must be a string')
    expect(() => storageHub.setData(1, 'world')).toThrowError('First parameter must be a string')
    expect(() => storageHub.setData({ random: "" }, 'world')).toThrowError('First parameter must be a string')
  })

  it('should reset store', () => {
    storageHub.setData('hello', 'world')
    expect(storageHub.getData('hello')).toEqual('world');
    storageHub.reset()
    expect(storageHub.getData('hello')).toEqual(undefined);
  })

  describe('debugging', () => {
    beforeEach(() => {
      spyOn(console, 'debug');
    })

    it('should not debug by default', () => {
      storageHub.setData('hello', 'world')
      expect(console.debug).not.toBeCalled()
    })

    it('should debug if debugging is turned on', () => {
      storageHub.setDebug(true)
      storageHub.setData('test', 'debug')
      expect(console.debug).toBeCalledWith('[StorageHub] Before:', {})
      expect(console.debug).toBeCalledWith('[StorageHub] After:', { test: 'debug' })
      storageHub.setDebug(false)
      storageHub.setData('no', 'debug')
      expect(console.debug).toHaveBeenCalledTimes(2)
    })
  })
});
