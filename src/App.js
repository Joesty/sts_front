import React, { Component } from 'react';
import Subjects from './components/Subjects';
import AddSubject from './components/AddSubject'
import './App.css';

const url = "http://localhost:5000/subjects"

class App extends Component {
  constructor(){
    super();
    this.state = {
      subjects: [],
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
      <div className="App">
        <AddSubject addSubject={this.handleAddSubject.bind(this)}/>
        <Subjects subjects={this.state.subjects} onDelete={this.handleDeleteSubject.bind(this)} />
      </div>
    );
  }
}

export default App;