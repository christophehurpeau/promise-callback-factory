'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveFromCallback = resolveFromCallback;
exports.default = promiseCallback;

/**
 * Creates a callback that resolve or reject a promise
 * according to the default callback convention in node: (err, result)
 *
 * @param {Function} resolve resolve function of the promise
 * @param {Function} reject reject function of the promise
 * @return {Function}
 */
function resolveFromCallback(resolve, reject) {
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
function promiseCallback(callback) {
  return new Promise(function (resolve, reject) {
    callback(resolveFromCallback(resolve, reject));
  });
}
//# sourceMappingURL=index.js.map