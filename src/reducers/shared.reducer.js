import { REDIRECT } from '../actions/shared.actions';

const defaultState = { nextUrl: null };

export default (state = defaultState, action) => {
  switch (action.type) {
  case REDIRECT:
    return Object.assign({}, state, { nextUrl: action.payload });
  default:
    return state;
  }
};
