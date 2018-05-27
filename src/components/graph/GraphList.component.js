import React from 'react';
import {
  Link
} from 'react-router-dom';

const GraphList = ({ graphs, deleteAction }) => {
  const listOfGraphs = graphs.map(graph => (
    <tr key={graph.id}>
      <th scope="row">{graph.id}</th>
      <th>{graph.name}</th>
      <th>
        <button
          onClick={deleteAction.bind(null, graph.id)}
          type="button"
          class="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </th>
    </tr>
  ));

  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>{listOfGraphs}</tbody>
    </table>
  );
};

export default GraphList;