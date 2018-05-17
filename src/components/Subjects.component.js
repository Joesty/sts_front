import React, { Component } from 'react';
import SubjectItem from './SubjectItem.component'

class Subjects extends Component {
  deleteSubject(id){
    this.props.onDelete(id);
  }

  render() {
    if (!this.props.subjects.length) {
      return null;
    }

    const subjectItems = this.props.subjects.map(subject => (
      <SubjectItem onDelete={this.deleteSubject.bind(this)} key={subject.id} subject={subject} />
    ));

    return (
      <div className="Subjects">
        {subjectItems}
      </div>
    );
  }
  }
  
  export default Subjects;