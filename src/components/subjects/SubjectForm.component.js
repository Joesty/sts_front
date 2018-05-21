import React, { Component } from 'react';
import _ from 'lodash';

class SubjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = { entity: {} };
  }

  static defaultProps = {
    semesters: [1, 2, 3, 4, 5, 6, 7, 8]
  };

  handleSubmit () { 
    this.props.submit(this.state.entity) 
  };

  onChange(field, event) {
    this.setState({
      entity: {
        ...this.state.entity,
        [field]: _.get(event, 'target.value', '')
      }
    });
  }

  render() {
    const semesterOptions = this.props.semesters.map(semester => {
      return (
        <option key={semester} value={semester}>
          {semester}
        </option>
      );
    });

    return (
      <div class="card mt-3">
        <div class="card-header">
          <h4>Add Subject</h4>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label>Subject Name:</label>
              <br />
              <input className="form-control" type="text" onChange={this.onChange.bind(this, 'name')} />
            </div>
            <div class="form-group">
              <label>Subject Semester:</label>
              <select class="form-control" ref="semester">
                {semesterOptions}
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

export default SubjectForm;
