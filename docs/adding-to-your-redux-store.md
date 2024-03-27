---
sidebar_position: 4
---

# Adding to redux store

**snap-fetch** exposes its reducers and sagas for you to integrate in you redux store configuration.
The only thing you need to do is to add the reducers and sagas like below to get started.

## Installation

You can install Snap-Fetch using npm or yarn:

```shell
npm install snap-fetch
```

or

```shell
yarn add snap-fetch
```

## Add SnapFetch Sagas and Reducers To Your Redux Store

### Add SnapFetch Reducers

```js
// highlight-next-line
import { name, reducer } from "snap-fetch";

export const rootReducer = combineReducers({
  // highlight-next-line
  [name]: reducer,
});
```

### Run SnapFetch Sagas

```js
/**
 * Create the store with dynamic reducers
 */

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers";
// highlight-next-line
import { rootSnapFetchSaga } from "snap-fetch";

export function configureAppStore() {
  const sagaMiddleware = createSagaMiddleware();

  // Create the Redux store with middleware
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(sagaMiddleware),
  });

  // highlight-next-line
  sagaMiddleware.run(rootSnapFetchSaga);
  return { store };
}
```
