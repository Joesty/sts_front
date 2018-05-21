import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function subjectReducer(state = initialState.subjects, action) {
  switch(action.type) {
    case types.LOAD_SUBJECTS_SUCCESS:
      return action.subjects
    case types.CREATE_SUBJECTS_SUCCESS:
      return [
        ...state.filter(subject => subject.id !== action.subject.id),
        Object.assign({}, action.subject)
      ]
    default:
      return state;
  }
}