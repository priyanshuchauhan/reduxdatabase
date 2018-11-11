// configureStore.js

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import storage from './jsonStorage'

function rootReducer(state = {count: 0}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    default:
      return state
  }
}

const persistConfig = {
  key: 'root',
  storage: storage(),
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(reducer, undefined, autoRehydrate())
// Enable persistence
// persistStore(store)

export default () => {
  let store = createStore(persistedReducer);
  //const foo = storage().getItem('232');
 // console.log('##foo', foo);
  let persistor = persistStore(store);
  return { store, persistor }
}