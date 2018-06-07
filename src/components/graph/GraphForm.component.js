import React, { Component } from 'react';
import _ from 'lodash';

class GraphForm extends Component {
  constructor(props) {
    super(props);
    this.state = { entity: {} }; // declared default state for selectors
  }

  handleSubmit() {
    const keys = Object.keys(this.state.entity);

    if (!keys.length) {
      return;
    }

    this.props.submit(this.state.entity);
  }

  onChange(field, event) {
    const myObj = JSON.parse(event.target.value);

    this.setState({
      ...this.state,
      [field]: myObj
    });
  }

  render() {
    const { subjects, relations } = this.props;
    const subjectOptions = subjects.map(subject => {
      const parents = [];
      relations.forEach(relation => {
        if (relation.cid === subject.id){
          parents.push(relation.pid);
        }
      });
      const graphObj = {
        id: subject.id,
        name: subject.name,
        semester: subject.semester,
        credits: subject.credits,
        parents: parents
      };

      const view = `${subject.name} ${subject.semester}`;

      return (
        <option key={subject.id} value={JSON.stringify(graphObj)}>
          {view}
        </option>
      );
    });

    return (
      <div className="card mt-3">
        <div className="card-header">
          <h4>Add Point</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Subject:</label>
              <select
                className="form-control"
                ref="subject"
                onChange={this.onChange.bind(this, 'entity')}
              >
                <option>Choose...</option>
                {subjectOptions}
              </select>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleSubmit.bind(this)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default GraphForm;
