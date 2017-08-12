// @flow

// require('dotenv-safe').load();

/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';  
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

import 'semantic-ui-css/semantic.min.css';
/* eslint-enable import/first */

const sagaMiddleware = createSagaMiddleware(); 
let store = {
    ...createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    ),
    runSaga: sagaMiddleware.run(rootSaga)
};

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);
registerServiceWorker();


