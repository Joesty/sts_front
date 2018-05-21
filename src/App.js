import React, { Component } from 'react';
import SubjectsPage from './components/SubjectsPage.component';
import AddSubject from './components/AddSubject.component';
import SubjectInfo from './components/SubjectInfo.component';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

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
            <li><Link to="/addsubject">Add Subject</Link></li>
            <li><Link to="/subjects">Subjects</Link></li>
        </ul>
        <Route path="/addsubject" render={()=> <AddSubject addSubject={this.handleAddSubject.bind(this)}/> } />
        <Route path="/subject/details/:subjectId"  component={SubjectInfo} />
        <Route path="/subjects" component={SubjectsPage} />
      </div>

      </Router>
    );
  }
}

export default App;