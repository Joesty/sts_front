import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Subject extends React.Component {
  render() {
    const { subject } = this.props;

    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{subject.name}</h1>
        <p>breed: {subject.semester}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { subject: state.subjects.current };
};

export default withRouter(connect(mapStateToProps)(Subject));