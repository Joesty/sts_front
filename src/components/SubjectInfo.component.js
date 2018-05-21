import React, { Component } from 'react';

const SubjectInfo = ({ subject }) => (
	<div>
		<li>
			<strong>{subject.name}</strong>
		</li>
		<li>
			Semester: {subject.semester}
		</li>
		<li>
			Program: {subject.work_program}
		</li>
		<li>
			Control type: {subject.control_type}
		</li>
		<li>
			Credits: {subject.credits}
		</li>
		<li>
			Hours lections: {subject.hours_lections}
		</li>
		<li>
			Hours labs: {subject.hours_labs}
		</li>
		<li>
			Hours seminars: {subject.hours_seminars}
		</li>
		<li>
			Hours individual: {subject.hours_individual}
		</li>
		<li>
			Hours consultation: {subject.hours_consultations}
		</li>
		<li>
			Hours practice: {subject.hours_practice}
		</li>
		<li>
			Hours self: {subject.hours_self}
		</li>
		<li>
			Hours production: {subject.hours_prod}
		</li>
	</div>
);

export default SubjectInfo;