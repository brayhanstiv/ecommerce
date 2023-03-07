// Packages
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import reducers from './reducers';
import rootSaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['shopping']
}

const persistedReducer = persistReducer(persistConfig, reducers)

// mount it on the Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

// then run the saga
sagaMiddleware.run(rootSaga)

export default store;