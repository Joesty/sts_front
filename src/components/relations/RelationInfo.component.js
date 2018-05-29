import React, { Component } from 'react';

const RelationInfo = ({ relation }) => (
  <ul className="list-group mt-3">
    <li className="list-group-item">
      <strong>{relation.id}</strong>
    </li>
    <li className="list-group-item">Parrent: {relation.pid}</li>
    <li className="list-group-item">Child: {relation.cid}</li>
  </ul>
);

export default RelationInfo;
