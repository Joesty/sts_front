
import { getRelations } from '../api/relations.api';

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