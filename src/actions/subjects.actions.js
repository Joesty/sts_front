import { getSubjects, addSubject } from '../api/subjects.api';
import { redirect } from './shared.actions';

export const LOAD_SUBJECTS_SUCCESS = 'LOAD_SUBJECTS_SUCCESS';

export const loadSubjects = () => {
  return (dispatch) => {
    return getSubjects().then(subjects => {
      dispatch({ type: LOAD_SUBJECTS_SUCCESS, payload: subjects });
    }).catch(error => {
      dispatch({ type: 'ERR', payload: error });
    });
  };
}

export const CREATE_SUBJECTS_SUCCESS = 'CREATE_SUBJECTS_SUCCESS';

export const createSubject = (subject) => {
  return function(dispatch) {
    return addSubject(subject)
      .then(response => dispatch({ type: CREATE_SUBJECTS_SUCCESS, payload: response }))
      .then(() => dispatch(redirect('/subjects/list')))
      .catch(error => dispatch({ type: 'ERR', payload: error }));
  };
}
