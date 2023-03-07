import { put, takeLatest } from 'redux-saga/effects'
import { ADD_TO_CART, SUCCESS_ADD_TO_CART } from '../constants';

function* addCart(payload) {
  yield put({type: SUCCESS_ADD_TO_CART, payload})
}

export default function* shopppingSaga() {
  yield takeLatest(ADD_TO_CART, addCart)
};