import React, { Component } from 'react';

const deleteUrl = "http://localhost:5000/subjects/";

class SubjectItem extends Component {
    deleteSubject(id){
        console.log('test');
        fetch (deleteUrl + id, {
            method: 'DELETE',
            mode: 'cors'
        })
        .then(response => {
            response.json();
            this.props.onDelete(id);
        })
    }
    render() {
      //console.log(this.props)
      return (
        <li className="Subject">
           <strong>{this.props.subject.name}</strong>: {this.props.subject.semester} <button onClick={this.deleteSubject.bind(this, this.props.subject.id)}>Delete</button>
        </li>
      );
    }
  }
  
  export default SubjectItem;