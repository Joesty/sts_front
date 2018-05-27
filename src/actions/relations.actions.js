import { getRelations, addRelation, removeRelation, getByIdRelation } from '../api/relations.api';
import { redirect } from './shared.actions';

export const LOAD_RELATIONS_SUCCESS = 'LOAD_RELATIONS_SUCCESS';

export const loadRelations = () => {
  return (dispatch) => {
    return getRelations().then(relations => {
      dispatch({ type: LOAD_RELATIONS_SUCCESS, payload: relations });
    }).catch(error => {
      dispatch({ type: 'ERR', payload: error });
    });
  };
}

export const CREATE_RELATIONS_SUCCESS = 'CREATE_RELATIONS_SUCCESS';

export const createRelation = (relation) => {
  return (dispatch) => {
    return addRelation(relation)
      .then(response => dispatch({ type: CREATE_RELATIONS_SUCCESS, payload: response }))
      .then(() => dispatch(loadRelations()))
      .then(() => dispatch(redirect('/relations/list')))
      .catch(error => dispatch({ type: 'ERR', payload: error }));
  };
}

export const DELETE_RELATION_SUCCESS = 'DELETE_RELATION_SUCCESS';

export const deleteRelation = (id) => {
  return (dispatch) => {
    return removeRelation(id)
      .then(response => dispatch({ type: DELETE_RELATION_SUCCESS, payload: null }))
      .then(() => dispatch(loadRelations()))
      .catch(error => dispatch({ type: 'ERR', payload: error }));
  };
}

export const GET_RELATION_SUCCESS = 'GET_RELATION_SUCCESS';

export const getRelation = (id) => {
  return (dispatch) => {
    return getByIdRelation(id)
      .then(relation => dispatch({ type: GET_RELATION_SUCCESS, payload: relation }))
      .catch(error => dispatch({ type: 'ERR', payload: error }));
  };
}