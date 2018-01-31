import { createStore, applyMiddleware, compose } from 'redux';
import { Map } from 'immutable';

import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const initialState = new Map();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
