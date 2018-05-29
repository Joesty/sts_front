import React, { Component } from 'react';

const RelationInfo = ({ relation }) => (
	<ul class="list-group mt-3">
		<li class="list-group-item">
			<strong>{relation.id}</strong>
		</li>
		<li class="list-group-item">
			Parrent: {relation.pid}
		</li>
		<li class="list-group-item">
			Child: {relation.cid}
		</li>
	</ul>
);

export default RelationInfo;