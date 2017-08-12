// @flow

import initialState from '../initialState';
import * as actions from './actions';

import type { Words } from './initialState';

export default function (state: Words = initialState.words, action: actions.WordAction ): Words {
    switch (action.type) {
        case actions.WORDS_FILTER_NORMALIZE:
          return {
            ...state,
            normalize: !state.normalize
          };
        case actions.WORDS_INPUT_UPDATED:
          return {
            ...state,
            raw: action.data,
            thinking: true
          };
        case actions.NORMALIZED_FETCH_SUCCEEDED:
          const rawWords = state.raw.split(' ')
          return {
            ...state,
            thinking: false,
            errorMessage: '',
            tokens: action.data.split(' ').map((normalWord, i) => {
              const rawWord = rawWords[i]
              return {
                raw: rawWord,
                normal: normalWord,
                visualLength: Math.max(rawWord.length, normalWord.length)
              }
            })
          }
        case actions.NORMALIZED_FETCH_FAILED:
          return {
            ...state,
            thinking: false,
            errorMessage: action.data
          }
        default:
          return state;
    }
}
