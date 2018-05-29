import { getGraph, addGraph, removeGraph } from '../api/graph.api';
import { redirect } from './shared.actions';

export const LOAD_GRAPH_SUCCESS = 'LOAD_GRAPH_SUCCESS';

export const loadGraph = () => {
  return (dispatch) => {
    return getGraph().then(graph => {
      dispatch({ type: LOAD_GRAPH_SUCCESS, payload: graph });
    }).catch(error => {
      dispatch({ type: 'ERR', payload: error });
    });
  };
}

export const CREATE_GRAPH_SUCCESS = 'CREATE_GRAPH_SUCCESS';

export const createGraph = (data) => {
  return (dispatch) => {
    return addGraph(data)
    .then(response => dispatch({ type: CREATE_GRAPH_SUCCESS, payload: null }))
    .then(() => dispatch(loadGraph()))
    .catch(error => dispatch({ type: 'ERR', payload: error }));
  };
} 

export const DELETE_GRAPH_SUCCESS = 'DELETE_GRAPH_SUCCESS';

export const deleteGraph = (id) => {
  return (dispatch) => {
    return removeGraph(id)
      .then(response => dispatch({ type: DELETE_GRAPH_SUCCESS, payload: null }))
      .then(() => dispatch(loadGraph()))
      .catch(error => dispatch({ type: 'ERR', payload: error }));
  };
}