import promiseCallback, { resolveFromCallback } from './index';

describe('resolveFromCallback', () => {
  [undefined, null, 0].forEach((errValue: any) => {
    test(`should resolve if err is ${errValue}`, () => {
      const value = {};
      const resolve = jest.fn();
      const reject = jest.fn();
      const callback = resolveFromCallback(resolve, reject);
      callback(errValue, value);
      expect(reject.mock.calls.length === 0);
      expect(resolve.mock.calls.length === 1);
      expect(resolve.mock.calls[0][0]).toBe(value);
    });
  });

  ['error string', new Error()].forEach((errValue: any) => {
    test(`should reject if err is ${errValue}`, () => {
      const resolve = jest.fn();
      const reject = jest.fn();
      const callback = resolveFromCallback(resolve, reject);
      callback(errValue, null);
      expect(resolve.mock.calls.length === 0);
      expect(reject.mock.calls.length === 1);
      if (typeof errValue === 'string') {
        const error = reject.mock.calls[0][0];
        expect(error.message).toBe(errValue);
      } else {
        expect(reject.mock.calls[0][0]).toBe(errValue);
      }
    });
  });
});

describe('promiseCallback', () => {
  test('should return a promise and resolve it', () => {
    let doneCallback;
    const p = promiseCallback(done => {doneCallback = done;});
    expect(p).toBeInstanceOf(Promise);




  });
});
