class SubjectApi {
  static getAllSubjects() {
    return fetch('http://localhost:5000/subjects').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static addSubject(data) {
    return fetch('http://localhost:5000/subjects', {
      body: JSON.stringify(data), // must match 'Content-Type' header
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
    })
    .then(response => response.json())
  }
}
export default SubjectApi;