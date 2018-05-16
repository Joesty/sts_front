import React, { Component } from 'react';
import Subjects from './components/Subjects';
import AddSubject from './components/AddSubject';
import SubjectInfo from './components/SubjectInfo';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import Hello from './components/HelloComponent';

const url = "http://localhost:5000/subjects"

class App extends Component {
  constructor(){
    super();
    this.state = {
      subjects: [],
      test: {name: 'hi', hours_lections: 'many'}
    };
  }

  componentDidMount(){
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ subjects: data }));
  }

  handleAddSubject(subject){
    let subjects = this.state.subjects;
    subjects.push(subject);
    this.setState({subjects:subjects});
  }
  
  handleDeleteSubject(id){
    let subjects = this.state.subjects;
    let index = subjects.findIndex(x => x.id === id);
    subjects.splice(index, 1);
    this.setState({subjects:subjects})
  }

  render() {
    return (
      <Router>
      <div className="App">
        <ul>
            <li><Link to="/hello">Hello</Link></li>
            <li><Link to="/addsubject">Add Subject</Link></li>
            <li><Link to="/subjects">Subjects</Link></li>
            <li><Link to="/test">Subject</Link></li>

        </ul>
        {/*<AddSubject addSubject={this.handleAddSubject.bind(this)}/>*/}
        {/*<Subjects subjects={this.state.subjects} onDelete={this.handleDeleteSubject.bind(this)} />*/}
        <Route path="/hello" component={Hello} />
        <Route path="/addsubject" render={()=> <AddSubject addSubject={this.handleAddSubject.bind(this)}/> } />
        <Route path="/subjects" render={()=><Subjects subjects={this.state.subjects} onDelete={this.handleDeleteSubject.bind(this)} />}/>
        <Route path="/test" render={()=><SubjectInfo  subject={this.state.test} />}/>
      </div>
      
      </Router>
    );
  }
}

export default App;