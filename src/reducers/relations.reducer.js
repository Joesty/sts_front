import { LOAD_RELATIONS_SUCCESS } from '../actions/relations.actions';

const defaultState = { all: [], current: {} };

export default function courseReducer(state = defaultState, action) {
  switch(action.type) {
    case LOAD_RELATIONS_SUCCESS:
      return { ...state, all: action.payload };
    default:
      return state;
  }
}