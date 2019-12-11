# Redux persist engine using IndexedDB

[![npm version](https://img.shields.io/npm/v/redux-persist-indexeddb-storage?style=flat-square)](https://www.npmjs.com/package/redux-persist-indexeddb-storage)
[![npm dependency](https://img.shields.io/david/machester4/redux-persist-indexeddb-storage?style=flat-square)](https://www.npmjs.com/package/redux-persist-indexeddb-storage)
[![npm downloads](https://img.shields.io/npm/dt/redux-persist-indexeddb-storage?style=flat-square)](https://www.npmjs.com/package/redux-persist-indexeddb-storage)

This storage can be used only in React, this package use [localForage](https://github.com/localForage/localForage), this uses localStorage in browsers with no IndexedDB or WebSQL support

## Supported Browsers Platforms

localForage works in *all* modern browsers (IE 8 and above).
_Asynchronous storage_ is available in all browsers **in bold**, with
localStorage fallback in parentheses.

* **Android Browser 2.1**
* **Blackberry 7**
* **Chrome 23**
* **Chrome for Android 32**
* **Firefox 18**
* **Firefox for Android 25**
* **Firefox OS 1.0**
* **IE 10** (IE 8+ with localStorage)
* **IE Mobile 10**
* **Opera 15** (Opera 10.5+ with localStorage)
* **Opera Mobile 11**
* **Phonegap/Apache Cordova 1.2.0**
* **Safari 3.1** (includes Mobile Safari)

Different browsers have [different storage limits](http://www.html5rocks.com/en/tutorials/offline/quota-research/#toc-overview), so plan accordingly.

## Install

```bash
npm install redux-persist-indexeddb-storage
```

or

```bash
yarn add redux-persist-indexeddb-storage
```

## Usage

Simply use 'redux-persist-indexeddb-storage' as the storage option in the redux-persist config.

```javascript
import storage from 'redux-persist-indexeddb-storage';
...

const persistConfig = {
  key: 'root',
  storage: storage('myDB'),
}

...
```
