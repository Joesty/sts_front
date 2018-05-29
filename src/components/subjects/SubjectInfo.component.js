import React, { Component } from 'react';

const SubjectInfo = ({ subject }) => (
	<ul className="list-group mt-3">
		<li className="list-group-item">
			<strong>{subject.name}</strong>
		</li>
		<li className="list-group-item">
			Semester: {subject.semester}
		</li>
		<li className="list-group-item">
			Program: {subject.work_program}
		</li>
		<li className="list-group-item">
			Control type: {subject.control_type}
		</li>
		<li className="list-group-item">
			Credits: {subject.credits}
		</li>
		<li className="list-group-item">
			Hours lections: {subject.hours_lections}
		</li>
		<li className="list-group-item">
			Hours labs: {subject.hours_labs}
		</li>
		<li className="list-group-item">
			Hours seminars: {subject.hours_seminars}
		</li>
		<li className="list-group-item">
			Hours individual: {subject.hours_individual}
		</li>
		<li className="list-group-item">
			Hours consultation: {subject.hours_consultations}
		</li>
		<li className="list-group-item">
			Hours practice: {subject.hours_practice}
		</li>
		<li className="list-group-item">
			Hours self: {subject.hours_self}
		</li>
		<li className="list-group-item">
			Hours production: {subject.hours_prod}
		</li>
	</ul>
);

export default SubjectInfo;