import t from 'flow-runtime';

/**
 * Creates a callback that resolve or reject a promise
 * according to the default callback convention in node: (err, result)
 *
 * @param {Function} resolve resolve function of the promise
 * @param {Function} reject reject function of the promise
 * @return {Function}
 */
export function resolveFromCallback(resolve, reject) {
  return function (err, result) {
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
export default function promiseCallback(callback) {
  let _callbackType = t.function();

  const _returnType = t.return(t.any());

  t.param('callback', _callbackType).assert(callback);

  return new Promise((resolve, reject) => {
    callback(resolveFromCallback(resolve, reject));
  }).then(_arg => _returnType.assert(_arg));
}
//# sourceMappingURL=index.js.map