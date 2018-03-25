'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var t = _interopDefault(require('flow-runtime'));

/* eslint-disable flowtype/no-weak-types */

var Resolve = t.type('Resolve', t.function(t.param('result', t.any()), t.return(t.void())));
var Reject = t.type('Reject', t.function(t.param('result', t.any()), t.return(t.void())));
var NodeStyleCallback = t.type('NodeStyleCallback', t.function(t.param('err', t.any()), t.param('result', t.any()), t.return(t.any())));
var PromiseCallbackCallback = t.type('PromiseCallbackCallback', t.function(t.param('done', NodeStyleCallback), t.return(t.any())));

/**
 * Creates a callback that resolve or reject a promise
 * according to the default callback convention in node: (err, result)
 *
 * @param {Function} resolve resolve function of the promise
 * @param {Function} reject reject function of the promise
 * @return {Function}
 */

function resolveFromCallback(resolve, reject) {
  var _returnType = t.return(NodeStyleCallback);

  t.param('resolve', Resolve).assert(resolve);
  t.param('reject', Reject).assert(reject);

  return _returnType.assert(function (err, result) {
    var _errType = t.any();

    var _resultType = t.any();

    t.param('err', _errType).assert(err);
    t.param('result', _resultType).assert(result);

    if (err) {
      if (typeof err === 'string') {
        err = _errType.assert(new Error(err));
      }

      return reject(err);
    }

    resolve(result);
  });
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
  var _returnType2 = t.return(t.any());

  t.param('callback', PromiseCallbackCallback).assert(callback);

  return new Promise(function (resolve, reject) {
    t.param('resolve', Resolve).assert(resolve);
    t.param('reject', Reject).assert(reject);

    callback(resolveFromCallback(resolve, reject));
  }).then(function (_arg) {
    return _returnType2.assert(_arg);
  });
}

exports.resolveFromCallback = resolveFromCallback;
exports.default = promiseCallback;
//# sourceMappingURL=index-browser-dev.cjs.js.map
