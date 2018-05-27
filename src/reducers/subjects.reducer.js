import { LOAD_SUBJECTS_SUCCESS, CREATE_SUBJECTS_SUCCESS, GET_SUBJECT_SUCCESS } from '../actions/subjects.actions';

const defaultState = { all: [], current: {} };

export default function subjectReducer(state = defaultState, action) {
  switch(action.type) {
    case LOAD_SUBJECTS_SUCCESS:
      return { ...state, all: action.payload };
    case CREATE_SUBJECTS_SUCCESS:
      return { ...state };
    case GET_SUBJECT_SUCCESS:
      return { ...state, current: action.payload };
    default:
      return state;
  }
}