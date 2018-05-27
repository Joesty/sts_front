import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import subjects from './subjects.reducer';
import relations from './relations.reducer';
import graphs from './graphs.reducer'
import shared from './shared.reducer';

const rootReducer = combineReducers({
  subjects,
  relations,
  graphs,
  shared
});

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk, logger),
  );
}