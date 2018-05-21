import * as types from './actionTypes';
import hobbyApi from '../api/relationsApi';

export function loadRelationsSuccess(relations) {
  return {type: types.LOAD_RELATIONS_SUCCESS, hobbies};
}

export function loadRelations() {
  return function(dispatch) {
    return hobbyApi.getRelations().then(relations => {
      dispatch(loadRelationsSuccess(relations));
    }).catch(error => {
      throw(error);
    });
  };
}