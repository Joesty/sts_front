
import { loadSubjects } from './subjects.actions';

export const initialize = () => {
  return (dispatch) => {
    dispatch(loadSubjects());
  };
};

export const REDIRECT = 'REDIRECT';

export const redirect = (url) => {
  return async (dispatch) => {
    await dispatch({ type: REDIRECT, payload: url });
    await dispatch({ type: REDIRECT, payload: null });
  };
};