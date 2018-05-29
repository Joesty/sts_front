import React from 'react';
import { Link } from 'react-router-dom';

const GraphList = ({ graphs, deleteAction }) => {
  const listOfGraphs = graphs.map(graph => (
    <tr key={graph.id}>
      <td scope="row">{graph.id}</td>
      <td>{graph.name}</td>
      <td>
        <button
          onClick={deleteAction.bind(null, graph.id)}
          type="button"
          className="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </td>
    </tr>
  ));

  return (
    <table className="table table-bordered mt-3">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>{listOfGraphs}</tbody>
    </table>
  );
};

export default GraphList;
