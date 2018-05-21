import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as subjectActions from '../actions/subjects.actions';
import SubjectForm from '../components/subjects/SubjectForm.component';

class SubjectManage extends React.Component {
  render() {
    const { subject, submit } = this.props;

    return (
      <div className="col-md-8 col-md-offset-2">
        <SubjectForm submit={submit} subject={subject} />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { 
    subject: state.subjects.current 
  };
};

const mapActionsToProps = (dispatch) => {
  return { 
    submit: (args) => dispatch(subjectActions.createSubject(args))
  };
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(SubjectManage));