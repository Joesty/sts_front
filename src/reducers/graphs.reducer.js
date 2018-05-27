import { LOAD_GRAPH_SUCCESS, CREATE_GRAPH_SUCCESS } from '../actions/graph.actions';

const defaultState = { all: [], current: {} };

export default function subjectReducer(state = defaultState, action) {
  switch(action.type) {
    case LOAD_GRAPH_SUCCESS:
      return { ...state, all: action.payload };
    case CREATE_GRAPH_SUCCESS:
      return { ...state };
    default:
      return state;
  }
}