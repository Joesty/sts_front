import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.relations, action) {
  switch(action.type) {
    case types.LOAD_RELATIONS_SUCCESS:
      return action.relations;
    default:
      return state;
  }
}