import React, { Component } from 'react';
import _ from 'lodash';

class GraphForm extends Component {
  constructor(props) {
    super(props);
    this.state = { entity: { } }; // declared default state for selectors
  }

  handleSubmit () {
    this.props.submit(this.state.entity);
  };

  onChange(field, event) {
    var myObj = JSON.parse(event.target.value)
    this.setState({
      ...this.state,
      [field]: myObj
    });
  }

  render() {
    const subjectOptions = this.props.subjects.map(subject => {
      var parents = [];
      this.props.relations.forEach(relation => {
        if (relation.cid === subject.id){
          parents.push(relation.pid);
        }
      });
      const graphObj = {id: subject.id, name: subject.name, semester: subject.semester, credits: subject.credits, parents: parents};
      const view = subject.name + ' ' + subject.semester;
      return (
        <option key={subject.id} value={JSON.stringify(graphObj)}>
          {view}
        </option>
      );
    });
    return (
      <div class="card mt-3">
        <div class="card-header">
          <h4>Add Point</h4>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label>Subject:</label>
              <select class="form-control" ref="subject" onChange={this.onChange.bind(this, 'entity')}>
                {subjectOptions}
              </select>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleSubmit.bind(this)}
            >
              {' '}
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default GraphForm;
