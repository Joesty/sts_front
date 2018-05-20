import React, {PropTypes} from 'react';

const SubjectList = ({subjects}) => {
  return (
      <ul className="list-group">
        {subjects.map(subject =>
          <li className="list-group-item" key={subject.id}>
            {subject.name}
          </li>
        )}
      </ul>
  );
};

//SubjectList.PropTypes = {
//  subjects: PropTypes.array.isRequired
//};

export default SubjectList;