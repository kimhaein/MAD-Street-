import { takeEvery, takeLatest, put, call } from "redux-saga/effects";
import { startTypes } from "../reducers/startReducer";
import { fetchCategory, fetchList, fetchEtc } from './api/startApi';

export function* fetchCategorySaga({ payload }) {
  // console.log('fetchCategorySaga')
  const response = yield call(fetchCategory, payload);
  if (response.data) {
    yield put({
      type: startTypes.SET_SHOP_CATEGORY,
      payload: response.data,
    });
  } else {
    console.log(response);
  }
}

export function* fetchShopListSaga({ payload }) {
  // console.log('fetchShopListSaga');
  const response = yield call(fetchList, payload);
  if (response.data) {
    // console.log('fetchShopList 있음 >>', response.data);
    yield put({
      type: startTypes.SET_SHOP_LIST,
      name: payload.type,
      payload: response.data,
    });
  } else {
    console.log('fetchShopList >>', response.data);
  }
}

export function* fetcEtcListSaga({ payload }) {
  const response = yield call(fetchEtc, payload);
  if (response.data) {
    yield put({
      type: startTypes.SET_ETC_LIST,
      name: payload.type,
      payload: response.data,
    });
  } else {
    console.log('not yet');
  }
}

export default function* startSaga() {
  yield takeLatest(startTypes.FETCH_SHOP_CATEGORY, fetchCategorySaga);
  yield takeEvery(startTypes.FETCH_SHOP_LIST, fetchShopListSaga);
  yield takeEvery(startTypes.FETCH_ETC_LIST, fetcEtcListSaga);
}