import React, { Component } from 'react';
import Subjects from './components/Subjects.component';
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
        {/*<AddSubject addSubject={this.handleAddSubject.bind(this)}/>*/}
        {/*<Subjects subjects={this.state.subjects} onDelete={this.handleDeleteSubject.bind(this)} />*/}
        <Route path="/addsubject" render={()=> <AddSubject addSubject={this.handleAddSubject.bind(this)}/> } />
        <Route path="/subject/details/:subjectId"  render={({ match: { params: { subjectId } } })=>{
          if (!this.state.subjects) return null
          const subj = this.state.subjects && this.state.subjects.find(({ id }) => id == subjectId )
          if (!subj) return null

          return (<SubjectInfo  subject={subj} />
        )}}/>
        <Route path="/subjects" exec render={()=><Subjects subjects={this.state.subjects} onDelete={this.handleDeleteSubject.bind(this)} />}/>
      </div>
      
      </Router>
    );
  }
}

export default App;