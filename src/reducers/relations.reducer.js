import { LOAD_RELATIONS_SUCCESS, CREATE_RELATIONS_SUCCESS, GET_RELATION_SUCCESS } from '../actions/relations.actions';

const defaultState = { all: [], current: {} };

export default function subjectReducer(state = defaultState, action) {
  switch(action.type) {
    case LOAD_RELATIONS_SUCCESS:
      return { ...state, all: action.payload };
    case CREATE_RELATIONS_SUCCESS:
      return { ...state };
    case GET_RELATION_SUCCESS:
      return { ...state, current: action.payload };
    default:
      return state;
  }
}