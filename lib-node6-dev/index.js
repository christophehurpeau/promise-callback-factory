'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveFromCallback = resolveFromCallback;
exports.default = promiseCallback;

var _flowRuntime = require('flow-runtime');

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  let _callbackType = _flowRuntime2.default.function();

  const _returnType = _flowRuntime2.default.return(_flowRuntime2.default.ref('Promise', _flowRuntime2.default.any()));

  _flowRuntime2.default.param('callback', _callbackType).assert(callback);

  return _returnType.assert(new Promise((resolve, reject) => {
    callback(resolveFromCallback(resolve, reject));
  }));
}
//# sourceMappingURL=index.js.map