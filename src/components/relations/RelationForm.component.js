import React, { Component } from 'react';
import _ from 'lodash';

class RelationForm extends Component {
  constructor(props) {
    super(props);
    this.state = { }; // declared default state for selectors
  }

  static defaultProps = {
    semesters: [1, 2, 3, 4, 5, 6, 7, 8],
    controls_type: ['Exam', 'Test', 'None']
  };

  handleSubmit () { 
    this.props.submit(this.state.entity);
    console.log(this.state.entity);
  };

  onChange(field, event) {
    console.log(event.target.value);
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
      <div class="card mt-3">
        <div class="card-header">
          <h4>Add Relation</h4>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label>Parent Subject:</label>
              <select class="form-control" ref="subject" onChange={this.onChange.bind(this, 'pid')}>
                {subjectOptions}
              </select>
            </div>
            <div class="form-group">
              <label>Child Subject:</label>
              <select class="form-control" ref="subject" onChange={this.onChange.bind(this, 'cid')}>
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

export default RelationForm;
