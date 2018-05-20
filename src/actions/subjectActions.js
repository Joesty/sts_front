import subjectApi from '../api/subjectApi';
import * as types from './actionTypes';

export function loadSubjects() {
  return function(dispatch) {
    return subjectApi.getAllSubjects().then(subjects => {
      dispatch(loadSubjectsSuccess(subjects));
    }).catch(error => {
      throw(error);
    });
  };
}
export function createSubject(subject) {
  return function(dispatch) {
    return subjectApi.createSubject(subject).then(responseSubject => {
      dispatch(createSubjectSuccess(responseSubject));
      return responseSubject
    }).catch(error => {
      throw(error);
    });
  };
}

export function createSubjectSuccess(subject) {
  return {type: types.CREATE_SUBJECTS_SUCCESS, subject}
}

export function loadSubjectsSuccess(subjects) {
  return {type: types.LOAD_SUBJECTS_SUCCESS, subjects};
}