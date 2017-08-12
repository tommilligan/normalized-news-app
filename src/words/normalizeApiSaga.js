// @flow

import { put, call, takeEvery } from 'redux-saga/effects';

import { normalize } from 'normalized-news';

import { WORDS_INPUT_UPDATED, normalizedFetchSucceeded, normalizedFetchFailed } from './actions';

function* fetchNormalizedText(action) {
    console.log("Fetching normalized text");
    try {
        const normalizedText = yield call(normalize, action.data);
        yield put(normalizedFetchSucceeded(normalizedText));
    } catch (e) {
        console.error(e);
        yield put(normalizedFetchFailed(e.message));
    }
}

export default function* normalizeApi() {
    console.warn("Starting normalizeApi saga");
    yield takeEvery(WORDS_INPUT_UPDATED, fetchNormalizedText);
}