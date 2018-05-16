import React, { Component } from 'react';

class SubjectInfo extends Component {
    render() {
      return (
        <div>
            <li>
                <strong>{this.props.subject.name}</strong>
            </li>
            <li>
                Semester: {this.props.subject.semester}     
            </li>
            <li>
                Program: {this.props.subject.work_program}     
            </li>
            <li>
                Control type: {this.props.subject.control_type}     
            </li>
            <li>
                Credits: {this.props.subject.credits}     
            </li>
            <li>
                Hours lections: {this.props.subject.hours_lections}     
            </li>
            <li>
                Hours labs: {this.props.subject.hours_labs}     
            </li>
            <li>
                Hours seminars: {this.props.subject.hours_seminars}     
            </li>
            <li>
                Hours individual: {this.props.subject.hours_individual}     
            </li>
            <li>
                Hours consultation: {this.props.subject.hours_consultations}     
            </li>
            <li>
                Hours practice: {this.props.subject.hours_practice}     
            </li>
            <li>
                Hours self: {this.props.subject.hours_self}     
            </li>
            <li>
                Hours production: {this.props.subject.hours_prod}     
            </li>
        </div>
      );
    }
  }
  
  export default SubjectInfo;