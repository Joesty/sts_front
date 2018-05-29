import React from 'react';
import {
  Link
} from 'react-router-dom';

const SubjectList = ({ subjects, deleteAction }) => {
  const listOfSubjects = subjects.map(subject => (
    <tr key={subject.id}>
      <th scope="row">{subject.id}</th>
      <th><Link to={`/subjects/details/${subject.id}`}>{subject.name}</Link></th>
      <th>{subject.credits}</th>
      <th>{subject.hours_labs}</th>
      <th>{subject.hours_lections}</th>
      <th>{subject.hours_seminars}</th>
      <th>{subject.semester}</th>
      <th>
        <button
          onClick={deleteAction.bind(null, subject.id)}
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
          <th scope="col">Name</th>
          <th scope="col">Credits</th>
          <th scope="col">Labs</th>
          <th scope="col">Lections</th>
          <th scope="col">Seminars</th>
          <th scope="col">Semester</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>{listOfSubjects}</tbody>
    </table>
  );
};

export default SubjectList;
