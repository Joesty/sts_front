import React, { Component } from 'react';

import Redirector from './components/shared/Redirector.component';
import Subjects from './pages/Subjects.component';
import SubjectManage from './pages/SubjectManage.component';
import Subject from './pages/Subject.component';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav class="navbar navbar-dark bg-dark">
            <div class="container">
              <ul class="nav">
                <li class="nav-item">
                  <Link class="nav-link" to="/subjects/create">
                    Add Subject
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/subjects/list">
                    Subjects
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div class="container">
            <Route exact path="/subjects/create" component={SubjectManage} />
            <Route exact path="/subjects/update/:id" component={SubjectManage} />
            <Route exact path="/subjects/details/:id" component={Subject} />
            <Route exact path="/subjects/list" component={Subjects} />
          </div>
          <Redirector />
        </div>
      </Router>
    );
  }
}

export default App;
