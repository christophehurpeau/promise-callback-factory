<h3 align="center">
  promise-callback-factory
</h3>

<p align="center">
  create promise with node-style callback
</p>

<p align="center">
  <a href="https://npmjs.org/package/promise-callback-factory"><img src="https://img.shields.io/npm/v/promise-callback-factory.svg?style=flat-square"></a>
  <a href="https://circleci.com/gh/christophehurpeau/promise-callback-factory"><img src="https://img.shields.io/circleci/project/christophehurpeau/promise-callback-factory/master.svg?style=flat-square"></a>
  <a href="https://david-dm.org/christophehurpeau/promise-callback-factory"><img src="https://david-dm.org/christophehurpeau/promise-callback-factory.svg?style=flat-square"></a>
  <a href="https://dependencyci.com/github/christophehurpeau/promise-callback-factory"><img src="https://dependencyci.com/github/christophehurpeau/promise-callback-factory/badge?style=flat-square"></a>
  <a href="https://codecov.io/gh/christophehurpeau/promise-callback-factory"><img src="https://img.shields.io/codecov/c/github/christophehurpeau/promise-callback-factory/master.svg?style=flat-square"></a>
</p>

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
