// @flow

import type Words from './words/reducer';

export type State = {
    +words: Words
}

export default {
    words: {
        tokens: 'John Smith went shopping to Tescos with his housemate'.split(' '),
        filters: {
            neutral: true,
            anonymous: false
        }
    },
    filters: {
        neutral: true,
        anonymous: false
    }
}