import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


import * as subjectActions from '../actions/subjects.actions';
import SubjectList from '../components/subjects/SubjectList.component';

class Subjects extends React.Component {
  render() {
    const { subjects, deleteSubject, getSubject } = this.props;

    return(
      <div>
        <h4 className="mt-3 mb-3">Subjects:</h4>
        <div>
          <SubjectList getAction={getSubject} deleteAction={deleteSubject} subjects={subjects} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    subjects: state.subjects.all
  };
};

const mapActionsToProps = (dispatch) => {
  return { 
    deleteSubject: (args) => dispatch(subjectActions.deleteSubject(args)),
    getSubject: (args) => dispatch(subjectActions.getSubject(args)),
  };
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Subjects));