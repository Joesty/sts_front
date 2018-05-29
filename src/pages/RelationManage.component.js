import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as relationActions from '../actions/relations.actions';
import RelationForm from '../components/relations/RelationForm.component';

class RelationManage extends React.Component {
  render() {
    const { subjects, relation, submit } = this.props;

    return (
      <div className="container col-md-8 col-md-offset-2">
        <RelationForm submit={submit} subjects={subjects} relation={relation} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    relation: state.relations.current,
    subjects: state.subjects.all
  };
};

const mapActionsToProps = dispatch => {
  return {
    submit: args => dispatch(relationActions.createRelation(args))
  };
};

export default withRouter(
  connect(mapStateToProps, mapActionsToProps)(RelationManage)
);
