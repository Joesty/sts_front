import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import SubjectList from '../components/subjects/SubjectList.component';
import { withRouter } from 'react-router';

class Subjects extends React.Component {
  render() {
    const { subjects } = this.props;

    return(
      <div className="col-md-12">
        <h1>Subjects</h1>
        <div className="col-md-4">
          <SubjectList subjects={subjects} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    subjects: state.subjects.all
  };
}

export default withRouter(connect(mapStateToProps)(Subjects));