import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import SubjectInfo from '../components/subjects/SubjectInfo.component';
import * as subjectActions from '../actions/subjects.actions';

class Subject extends React.Component {

  componentDidMount() {
    const { match, getSubject } = this.props;
    
    getSubject(match.params.id);
  }
  render() {
    const { subject } = this.props;

    return (
      <div className="container">
        <SubjectInfo subject={subject}/>
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
    getSubject: (args) => dispatch(subjectActions.getSubject(args)),
  };
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Subject));