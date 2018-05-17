import React, { Component } from 'react';
const submitUrl = "http://localhost:5000/subjects"
class AddSubject extends Component {
    constructor(){
        super();
        this.state = {
            newSubject: {}
        }
    }
    static defaultProps = {
        semesters: [1,2,3,4,5,6,7,8]
    }
    postData(url, data) {
        // Default options are marked with *
        return fetch(url, {
          body: JSON.stringify(data), // must match 'Content-Type' header
          headers: {
            'content-type': 'application/json'
          },
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
        })
        .then(response => response.json()) // parses response to JSON
      }
    handleSubmit(e){
        e.preventDefault();
        console.log('Submitted');
        this.postData(submitUrl, {name: this.refs.name.value})
            .then(data => {
                console.log(data);
                this.setState({newSubject:{
                id: data.rows[0].id,
                name: this.refs.name.value,
                semester: this.refs.semester.value 
            }}, () => { this.props.addSubject(this.state.newSubject);})})
            .catch(error => console.error(error))
    }
    render() {
        let semesterOptions = this.props.semesters.map(semester => {
            return <option key={semester} value={semester}>{semester}</option>
        });
        return (
        <div>
            <h3>Add Subject</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Name</label><br />
                    <input type="text" ref="name" />
                </div>
                <div>
                    <label>Semester</label><br />
                    <select ref="semester">
                    {semesterOptions}
                    </select>
                </div>
                <input type="submit" value="Push to DB" />
            </form>
        </div>
        );
}
}
  
  export default AddSubject;