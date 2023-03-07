import { put, takeLatest } from 'redux-saga/effects'
import { SET_PRODUCT, SUCCESS_SET_PRODUCT } from '../constants';

function* setProduct(payload) {
  yield put({type: SUCCESS_SET_PRODUCT, payload})
}

export default function* productsSaga() {
  yield takeLatest(SET_PRODUCT, setProduct)
};