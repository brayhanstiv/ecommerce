// Packages
import { all } from 'redux-saga/effects';

// Sagas
import productsSaga from './productsSaga';
import shopppingSaga from './shopppingSaga';

export default function* rootSaga () {
  yield all([
    shopppingSaga(),
    productsSaga(),
  ])
}