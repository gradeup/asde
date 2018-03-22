# asde [![Build Status](https://travis-ci.org/gradeup/asde.svg?branch=master)](https://travis-ci.org/gradeup/asde) [![codecov](https://codecov.io/gh/gradeup/asde/badge.svg?branch=master)](https://codecov.io/gh/gradeup/asde?branch=master)

> Easy error handling with async await and destructuring for promises


## Install

```
$ npm install @gradeup/asde
```


## Usage

```js
const asde = require('@gradeup/asde');
const promise = Promise.reject(new Error('Something went wrong'));
const fn = async () => await asde(p);
//=> [{ message: 'Something went wrong' }, null]
```


## API

### asde(input)

#### input

Type: `Promise`

Promise or any thenable to resolve

## License

MIT © [Nikhil Srivastava](https://gradeup.github.io)
