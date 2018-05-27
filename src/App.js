import React, { Component } from 'react';

import Redirector from './components/shared/Redirector.component';
import Subjects from './pages/Subjects.component';
import SubjectManage from './pages/SubjectManage.component';
import Subject from './pages/Subject.component';
import Relations from './pages/Relations.component'
import RelationManage from './pages/RelationManage.component'
import Graph from './pages/Graph.component';

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
                  <Link class="nav-link" to="/relations/create">
                    Add Relation
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/subjects/list">
                    Subjects
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/relations/list">
                    Relations
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/graph">
                    Graph
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
            <Route exact path="/relations/create" component={RelationManage} />
            <Route exact path="/relations/list" component={Relations} />
            <Route exact path="/graph" component={Graph} />
            
          </div>
          <Redirector />
        </div>
      </Router>
    );
  }
}

export default App;
