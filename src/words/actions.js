// @flow

export const WORDS_FILTER_NEUTRALIZE = 'app/words/filter/neutralize';
type WORDS_FILTER_NEUTRALIZE_TYPE = 'app/words/filter/neutralize';
export const WORDS_FILTER_ANONYMIZE = 'app/words/filter/anonymize';
type WORDS_FILTER_ANONYMIZE_TYPE = 'app/words/filter/anonymize';

type WordsFilterNeutralizeAction = { type: WORDS_FILTER_NEUTRALIZE_TYPE, data: boolean };
export function wordsFilterNeutralize(data: boolean): WordsFilterNeutralizeAction {
  return {type: WORDS_FILTER_NEUTRALIZE, data: data};
}

type WordsFilterAnonymizeAction = { type: WORDS_FILTER_ANONYMIZE_TYPE, data: boolean };
export function wordsFilterAnonymize(data: boolean): WordsFilterAnonymizeAction {
  return {type: WORDS_FILTER_ANONYMIZE, data: data};
}

export type WordAction =
  | WordsFilterAnonymizeAction
  | WordsFilterNeutralizeAction
