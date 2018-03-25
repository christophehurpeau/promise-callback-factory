/* eslint-disable flowtype/no-weak-types */

type Resolve = (result: any) => void;
type Reject = (result: any) => void;

type NodeStyleCallback = (err: any, result: any) => any;
type PromiseCallbackCallback = (done: NodeStyleCallback) => any;

/**
 * Creates a callback that resolve or reject a promise
 * according to the default callback convention in node: (err, result)
 *
 * @param {Function} resolve resolve function of the promise
 * @param {Function} reject reject function of the promise
 * @return {Function}
 */
export function resolveFromCallback(resolve: Resolve, reject: Reject): NodeStyleCallback {
  return (err: any, result: any) => {
    if (err) {
      if (typeof err === 'string') {
        err = new Error(err);
      }

      return reject(err);
    }

    resolve(result);
  };
}

/**
 * Returns a promise
 *
 * The first argument is a callback with a done node-style callback
 *
 * @example
 * import promiseCallback from 'promise-callback-factory';
 * promiseCallback(done => fs.readFile('./myFile.txt', done))
 *   .then((txtContentBuffer) => {
 *     console.log(txtContentBuffer.toString());
 *   });
 *
 * @param {Function} callback callback((done) => {})
 * @return {Promise}
 */
export default function promiseCallback(callback: PromiseCallbackCallback): Promise<any> {
  return new Promise((resolve: Resolve, reject: Reject) => {
    callback(resolveFromCallback(resolve, reject));
  });
}
