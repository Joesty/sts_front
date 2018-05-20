import {combineReducers} from 'redux';
import subjects from './subjectReducer';
//import relations from './relationsReducer';

const rootReducer = combineReducers({
  // short hand property names
  subjects
  //relations
})

export default rootReducer;