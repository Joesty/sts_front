import React, { Component } from 'react';
import _ from 'lodash';

class RelationForm extends Component {
  constructor(props) {
    super(props);
    this.state = { entity: {} }; // declared default state for selectors
  }

  static defaultProps = {
    semesters: [1, 2, 3, 4, 5, 6, 7, 8],
    controls_type: ['Exam', 'Test', 'None']
  };

  handleSubmit() {
    const keys = Object.keys(this.state.entity);

    if (!keys.length) {
      return;
    }

    this.props.submit(this.state.entity);
  }

  onChange(field, event) {
    this.setState({
      entity: {
        ...this.state.entity,
        [field]: _.get(event, 'target.value', '')
      }
    });
  }

  render() {
    const subjectOptions = this.props.subjects.map(subject => {
      const view = subject.name + ' ' + subject.semester;
      return (
        <option key={subject.id} value={subject.id}>
          {view}
        </option>
      );
    });
    return (
      <div className="card mt-3">
        <div className="card-header">
          <h4>Add Relation</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Parent Subject:</label>
              <select
                className="form-control"
                ref="subject"
                onChange={this.onChange.bind(this, 'pid')}
              >
                <option>Choose...</option>
                {subjectOptions}
              </select>
            </div>
            <div className="form-group">
              <label>Child Subject:</label>
              <select
                className="form-control"
                ref="subject"
                onChange={this.onChange.bind(this, 'cid')}
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

export default RelationForm;
