// @flow

import { call } from 'redux-saga/effects';
import normalizeApi from './words/normalizeApiSaga';

// Here, we register our watcher saga(s) and export as a single generator 
// function (startForeman) as our root Saga.
export default function* startForman() {
    console.warn("Starting root saga");
    yield call(normalizeApi);
}