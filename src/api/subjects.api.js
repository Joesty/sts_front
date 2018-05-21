
export const getSubjects = () =>
  fetch('http://localhost:5000/subjects').then(r => r.json());

export const addSubject = (data) => { 
  return fetch('http://localhost:5000/subjects', {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', 
    mode: 'cors',
  })
  .then(r => r.json());
}

export const removeSubject = (id) => { 
  return fetch(`http://localhost:5000/subjects/${id}`, {
    method: 'DELETE',
  });
}

export const getByIdSubject = (id) => { 
  return fetch(`http://localhost:5000/subjects/${id}`);
}

