import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as subjectActions from '../actions/subjectActions';
import SubjectItem from './SubjectItem.component'
import SubjectList from './SubjectList.component'

class SubjectsPage extends React.Component {
  render() {
    return(
      <div className="col-md-12">
        <h1>Subjects</h1>
        <div className="col-md-4">
          <SubjectList subjects={this.props.subjects} />
        </div>
        <div className="col-md-8">
          {this.props.children}
        </div>
      </div>
    )
  }
}


//SubjectPage.propTypes = {
//  subjects: PropTypes.array.isRequired
//};

function mapStateToProps(state, ownProps) {
  return {
    subjects: state.subjects
  };
}

export default connect(mapStateToProps)(SubjectsPage);