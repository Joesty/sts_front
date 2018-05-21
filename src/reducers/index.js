import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import subjects from './subjects.reducer';
import shared from './shared.reducer';

const rootReducer = combineReducers({
  subjects,
  shared
});

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk, logger),
  );
}