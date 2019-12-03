# Redux persist engine using indexedDB

This storage can be used only in React

## install

```bash
npm install redux-persist-indexeddb-storage
```

or

```bash
yarn add redux-persist-indexeddb-storage
```

## usage

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