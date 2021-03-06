// @flow

export const WORDS_FILTER_NORMALIZE = 'app/words/filter/normalize';
export type WORDS_FILTER_NORMALIZE_TYPE = 'app/words/filter/normalize';
export const WORDS_INPUT_UPDATED = 'app/words/input/updated';
export type WORDS_INPUT_UPDATED_TYPE = 'app/words/input/updated';
export const NORMALIZED_FETCH_SUCCEEDED = 'app/words/normalize/succeeded';
export type NORMALIZED_FETCH_SUCCEEDED_TYPE = 'app/words/normalize/succeeded';
export const NORMALIZED_FETCH_FAILED = 'app/words/normalize/failed';
export type NORMALIZED_FETCH_FAILED_TYPE = 'app/words/normalize/failed';

export type WordsFilterNormalizeAction = { type: WORDS_FILTER_NORMALIZE_TYPE };
export function wordsFilterNormalize(): WordsFilterNormalizeAction {
  return {type: WORDS_FILTER_NORMALIZE};
}

export type WordsInputUpdatedAction = { type: WORDS_INPUT_UPDATED_TYPE, data: string };
export function wordsInputUpdate(data: string): WordsInputUpdatedAction {
  return {type: WORDS_INPUT_UPDATED, data: data};
}

export type NormalizedFetchSucceededAction = { type: NORMALIZED_FETCH_SUCCEEDED_TYPE, data: string };
export function normalizedFetchSucceeded(data: string): NormalizedFetchSucceededAction {
  return {type: NORMALIZED_FETCH_SUCCEEDED, data: data};
}

export type NormalizedFetchFailedAction = { type: NORMALIZED_FETCH_FAILED_TYPE, data: string };
export function normalizedFetchFailed(data: string): NormalizedFetchFailedAction {
  return {type: NORMALIZED_FETCH_FAILED, data: data};
}

export type WordAction =
  | WordsFilterNormalizeAction
  | WordsInputUpdatedAction
  | NormalizedFetchSucceededAction
  | NormalizedFetchFailedAction
