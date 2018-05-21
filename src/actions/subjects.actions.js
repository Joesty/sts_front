import { getSubjects, addSubject, removeSubject, getByIdSubject } from '../api/subjects.api';
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
  return (dispatch) => {
    return addSubject(subject)
      .then(response => dispatch({ type: CREATE_SUBJECTS_SUCCESS, payload: response }))
      .then(() => dispatch(redirect('/subjects/list')))
      .catch(error => dispatch({ type: 'ERR', payload: error }));
  };
}

export const DELETE_SUBJECT_SUCCESS = 'DELETE_SUBJECT_SUCCESS';

export const deleteSubject = (id) => {
  return (dispatch) => {
    return removeSubject(id)
      .then(response => dispatch({ type: DELETE_SUBJECT_SUCCESS, payload: null }))
      .then(() => dispatch(loadSubjects()))
      .catch(error => dispatch({ type: 'ERR', payload: error }));
  };
}

export const GET_SUBJECT_SUCCESS = 'GET_SUBJECT_SUCCESS';

export const getSubject = (id) => {
  return (dispatch) => {
    return getByIdSubject(id)
      .then(subject => dispatch({ type: GET_SUBJECT_SUCCESS, payload: subject }))
      .catch(error => dispatch({ type: 'ERR', payload: error }));
  };
}

