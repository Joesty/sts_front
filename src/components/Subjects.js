import React, { Component } from 'react';
import SubjectItem from './SubjectItem'

class Subjects extends Component {
  deleteSubject(id){
    this.props.onDelete(id);
  }

    render() {
      let subjectItems;
      if (this.props.subjects){
        subjectItems = this.props.subjects.map(subject => {
          //console.log(subject);
          return(
            <SubjectItem onDelete={this.deleteSubject.bind(this)} key={subject.id} subject={subject} />
          );
        });
      }
      return (
        <div className="Subjects">
          {subjectItems}
        </div>
      );
    }
  }
  
  export default Subjects;