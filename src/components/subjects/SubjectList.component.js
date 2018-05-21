import React from 'react';

const SubjectList = ({ subjects }) => {
  const listOfSubjects = subjects.map((subject) =>
    <li className="list-group-item" key={subject.id}>
      {subject.name}
    </li>
  );

  return (
      <ul className="list-group">
        {listOfSubjects}
      </ul>
  );
};

export default SubjectList;