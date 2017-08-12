// @flow

import words from './words/initialState';

import type { Words } from './words/initialState';

export type State = {
    +words: Words
}

export default {
    words: words,
    filters: {
        neutral: true,
        anonymous: false
    }
}