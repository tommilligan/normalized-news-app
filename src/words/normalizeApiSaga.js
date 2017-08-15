// @flow

import { put, call, takeEvery } from 'redux-saga/effects';

import { normalize } from 'normalized-news';

import type { WordsInputUpdatedAction } from './actions';
import { WORDS_INPUT_UPDATED, normalizedFetchSucceeded, normalizedFetchFailed } from './actions';

function* fetchNormalizedText(action: WordsInputUpdatedAction): Generator<void, void, string> {
    if (action.data) {
        try {
            console.debug("Fetching normalized text");
            const normalizedText = yield call(normalize, action.data);
            yield put(normalizedFetchSucceeded(normalizedText));
        } catch (e) {
            console.error(e);
            yield put(normalizedFetchFailed(e.message));
        }
    } else {
        yield put(normalizedFetchSucceeded(""));
    }
}

export default function* normalizeApi(): Generator<void, void, void> {
    console.warn("Starting normalizeApi saga worker");
    yield takeEvery(WORDS_INPUT_UPDATED, fetchNormalizedText);
}