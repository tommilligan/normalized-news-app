// @flow

import { put, call, takeEvery } from 'redux-saga/effects';

import GenderFluid from 'gender-fluid';

import { WORDS_INPUT_UPDATED, normalizedFetchSucceeded, normalizedFetchFailed } from './actions';

const gender = new GenderFluid();

function* fetchNormalizedText(action) {
    console.log("Fetching normalized text");
    try {
        const normalizedText = yield call(gender.fluidize, action.data);
        yield put(normalizedFetchSucceeded(normalizedText));
    } catch (e) {
        yield put(normalizedFetchFailed(e.message));
    }
}

export default function* normalizeApi() {
    console.warn("Starting normalizeApi saga");
    yield takeEvery(WORDS_INPUT_UPDATED, fetchNormalizedText);
}