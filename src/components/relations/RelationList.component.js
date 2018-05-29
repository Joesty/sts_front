import React from 'react';
import { Link } from 'react-router-dom';

const RelationList = ({ relations, deleteAction }) => {
  const listOfRelations = relations.map(relation => (
    <tr key={relation.id}>
      <th scope="row">{relation.id}</th>
      <th>
        <Link to={`/subjects/details/${relation.pid}`}>{relation.pid}</Link>
      </th>
      <th>
        <Link to={`/subjects/details/${relation.cid}`}>{relation.cid}</Link>
      </th>
      <th>
        <button
          onClick={deleteAction.bind(null, relation.id)}
          type="button"
          className="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </th>
    </tr>
  ));

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Parent</th>
          <th scope="col">Child</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>{listOfRelations}</tbody>
    </table>
  );
};

export default RelationList;
