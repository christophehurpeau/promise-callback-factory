# promise-callback-factory [![NPM version][npm-image]][npm-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/christophehurpeau/promise-callback-factory.svg)](https://greenkeeper.io/)

create promise with node-style callback

[![Dependency ci Status][dependencyci-image]][dependencyci-url]
[![Dependency Status][daviddm-image]][daviddm-url]

## Install

```sh
npm install --save promise-callback-factory
```

## Usage

```js
import promiseCallback from 'promise-callback-factory';

promiseCallback(done => fs.readFile('./myFile.txt', done))
  .then((txtContentBuffer) => {
    console.log(txtContentBuffer.toString());
  });
```

[npm-image]: https://img.shields.io/npm/v/promise-callback-factory.svg?style=flat-square
[npm-url]: https://npmjs.org/package/promise-callback-factory
[daviddm-image]: https://david-dm.org/christophehurpeau/promise-callback-factory.svg?style=flat-square
[daviddm-url]: https://david-dm.org/christophehurpeau/promise-callback-factory
[dependencyci-image]: https://dependencyci.com/github/christophehurpeau/promise-callback-factory/badge?style=flat-square
[dependencyci-url]: https://dependencyci.com/github/christophehurpeau/promise-callback-factory
