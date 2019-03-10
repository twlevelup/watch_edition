const StorageHub = require("../src/StorageHub");

describe("StorageHub", () => {

  let storageHub;

  beforeEach(() => {
    storageHub = new StorageHub();
  });

  it('should setData without limits on type', () => {
    storageHub.setData('hello', 'world');
    expect(storageHub.getData('hello')).toEqual('world');
    storageHub.setData('hello', { random: 'json' });
    expect(storageHub.getData('hello')).toEqual({ random: 'json' });
    storageHub.setData('hello', ['1', 2, '3']);
    expect(storageHub.getData('hello')).toEqual(['1', 2, '3']);
  });

  it('should only accept string as the field parameter', () => {
    expect(() => storageHub.setData([], 'world')).toThrowError('First parameter must be a string');
    expect(() => storageHub.setData(undefined, 'world')).toThrowError('First parameter must be a string');
    expect(() => storageHub.setData(null, 'world')).toThrowError('First parameter must be a string');
    expect(() => storageHub.setData(1, 'world')).toThrowError('First parameter must be a string');
    expect(() => storageHub.setData({ random: "" }, 'world')).toThrowError('First parameter must be a string');
  });

  it('should reset store', () => {
    storageHub.setData('hello', 'world');
    expect(storageHub.getData('hello')).toEqual('world');
    storageHub.reset();
    expect(storageHub.getData('hello')).toEqual(undefined);
  });

  describe('debugging', () => {
    beforeEach(() => {
      spyOn(console, 'debug');
    });

    it('should not debug by default', () => {
      storageHub.setData('hello', 'world');
      expect(console.debug).not.toBeCalled();
    });

    it('should debug if debugging is turned on', () => {
      storageHub.setDebug(true);
      storageHub.setData('test', 'debug');
      expect(console.debug).toBeCalledWith('[StorageHub] Before:', {});
      expect(console.debug).toBeCalledWith('[StorageHub] After:', { test: 'debug' });
      storageHub.setDebug(false);
      storageHub.setData('no', 'debug');
      expect(console.debug).toHaveBeenCalledTimes(2);
    });
  });

  describe('find', () => {
    afterEach(() => {
      storageHub.reset();
    });

    it('should return empty list if field does not exist', () => {
      const result = storageHub.find('doesNotExist', () => {});
      expect(result).toEqual([]);
    });

    it('should return empty list if value is not a list', () => {
      storageHub.setData('number', 10);
      storageHub.setData('string', "lorum ipsum");
      storageHub.setData('object', { hello: 'world' });

      expect(storageHub.find('number', () => true)).toEqual([]);
      expect(storageHub.find('string', () => true)).toEqual([]);
      expect(storageHub.find('object', () => true)).toEqual([]);
    });

    describe('with list data', () => {
      const data = [
        {
          name: 'Nemo',
          phone: '098765432',
          address: '50 Carrington St',
        },
        {
          name: 'Marlin',
          phone: '098765432',
          address: '51 Pitt St',
        },
        {
          name: 'Dory',
        }
      ];
      const addressBook = 'addressBook';

      beforeEach(() => {
        storageHub.setData(addressBook, data);
      });

      it('should return empty list if second argument is not a function', () => {
        expect(storageHub.find(addressBook)).toEqual([]);
        expect(storageHub.find(addressBook, 'blah')).toEqual([]);
        expect(storageHub.find(addressBook, 123)).toEqual([]);
      });

      it('should return all matching objects in list', () => {
        const result = storageHub.find(addressBook, (data) => data.name && data.name === 'Marlin');
        expect(result).toEqual([
          {
            name: 'Marlin',
            phone: '098765432',
            address: '51 Pitt St',
          }
        ]);
      });

      it('should return all matching object in list if there are multiple matches', () => {
        const result = storageHub.find(addressBook, (data) => data.phone);
        expect(result).toEqual([
          {
            name: 'Nemo',
            phone: '098765432',
            address: '50 Carrington St',
          },
          {
            name: 'Marlin',
            phone: '098765432',
            address: '51 Pitt St',
          }
        ]);
      });

      it('should return empty list if function never returns true', () => {
        const result = storageHub.find(addressBook, (data) => data.mobile);
        expect(result).toEqual([]);
      });
    });
  });
});
