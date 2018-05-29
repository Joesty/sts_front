
import { loadSubjects } from './subjects.actions';
import { loadRelations } from './relations.actions';
import { loadGraph } from './graph.actions';

export const initialize = () => {
  return (dispatch) => {
    dispatch(loadSubjects());
    dispatch(loadRelations());
    dispatch(loadGraph());
  };
};

export const REDIRECT = 'REDIRECT';

export const redirect = (url) => {
  return async (dispatch) => {
    await dispatch({ type: REDIRECT, payload: url });
    await dispatch({ type: REDIRECT, payload: null });
  };
};