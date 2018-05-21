import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class SubjectPage extends React.Component {
  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.props.subject.name}</h1>
        <p>breed: {this.props.subject.semester}</p>
      </div>
    );
  }
};

CatPage.propTypes = {
  subject: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  let subject = {name: '', semester: ''};
  const subjectId = ownProps.params.id;
  if (state.subjects.length > 0) {
    subject = Object.assign({}, state.subjects.find(subject => {subject.id ==
      id})
  }
  return {subject: subject};
};

export default connect(mapStateToProps)(SubjectPage);