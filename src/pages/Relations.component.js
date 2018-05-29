import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


import * as relationActions from '../actions/relations.actions';
import RelationList from '../components/relations/RelationList.component';

class Relations extends React.Component {
  render() {
    const { relations, deleteRelation, getRelation } = this.props;

    return(
      <div>
        <h4 className="mt-3 mb-3">Relations:</h4>
        <div>
          <RelationList getAction={getRelation} deleteAction={deleteRelation} relations={relations} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    relations: state.relations.all
  };
};

const mapActionsToProps = (dispatch) => {
  return { 
    deleteRelation: (args) => dispatch(relationActions.deleteRelation(args)),
    getRelation: (args) => dispatch(relationActions.getRelation(args)),
  };
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Relations));