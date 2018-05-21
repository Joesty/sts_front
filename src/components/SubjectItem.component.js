import React, { Component } from 'react';
import SubjectInfo from './SubjectInfo.component';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';

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
        <div>
            <li className="Subject">
                <strong>{this.props.subject.name}</strong>: {this.props.subject.semester}
                <button onClick={this.deleteSubject.bind(this, this.props.subject.id)}>Delete</button>
                <Link to={`/subject/details/${this.props.subject.id}`}>Details</Link>
            </li>
        </div>
      );
    }
  }

  export default SubjectItem;