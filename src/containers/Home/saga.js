import { takeLatest, put, call } from 'redux-saga/effects';

import request from 'utils/request';

import { getJokes } from './actions';

export function* getTestRequest() {
  const BASE_URL = 'https://official-joke-api.appspot.com/random_ten';

  try {
    // dispatch Request Action
    yield put(getJokes.request());

    // Get data From Request API
    const Jokesdata = yield call(request, BASE_URL);

    // dispatch success Action
    yield put(getJokes.success(Jokesdata));
  } catch (err) {
    yield put(getJokes.failure(err));
  } finally {
    yield put(getJokes.fulfill());
  }
}

export default function* dataTest() {
  yield takeLatest(getJokes.TRIGGER, getTestRequest);
}
