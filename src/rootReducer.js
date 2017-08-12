// @flow

import { combineReducers } from 'redux';
// import input from './input/reducer';
import words from './words/reducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
//  input, 
  words
});

export default rootReducer;