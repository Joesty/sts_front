import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as graphActions from '../actions/graph.actions';
import GraphData from '../components/graph/GraphData.component';
import GraphForm from '../components/graph/GraphForm.component';
import GraphList from '../components/graph/GraphList.component';

class Graph extends React.Component {
  render() {
    const { subjects, relations, graphs, deleteGraph, submit } = this.props;

    return (
      <div className="row">
        <div className="col">
          <GraphForm
            submit={submit}
            subjects={subjects}
            relations={relations}
          />
        </div>
        <div className="col">
          <GraphList deleteAction={deleteGraph} graphs={graphs} />
        </div>

        <div className="col">
          <GraphData graphs={graphs} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    relations: state.relations.all,
    subjects: state.subjects.all,
    graphs: state.graphs.all
  };
};

const mapActionsToProps = dispatch => {
  return {
    submit: args => dispatch(graphActions.createGraph(args)),
    deleteGraph: args => dispatch(graphActions.deleteGraph(args))
  };
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Graph));
