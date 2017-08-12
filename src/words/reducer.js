// @flow

import initialState from '../initialState';
import * as actions from './actions';

export type Words = {
  +tokens: Array<string>,
  +filters: {
      +neutral: boolean,
      +anonymous: boolean
  }
}

export default function (state: Words = initialState.words, action: actions.WordAction ): Words {
    switch (action.type) {
        case actions.WORDS_FILTER_ANONYMIZE:
          return { ...state, filters: {...state.filters, anonymous: action.data }};
        case actions.WORDS_FILTER_NEUTRALIZE:
          return { ...state, filters: {...state.filters, neutral: action.data }};
        default:
          return state;
    }
}
