export const getRelations = () =>
  fetch(`http://localhost:5000/relations`).then(r => r.json());

export const addRelation = (data) => { 
  return fetch('http://localhost:5000/relations', {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', 
    mode: 'cors',
  })
  .then(r => r.json());
}

export const removeRelation = (id) => { 
  return fetch(`http://localhost:5000/relations/${id}`, {
    method: 'DELETE',
  });
}

export const getByIdRelation = (id) => { 
  return fetch(`http://localhost:5000/relations/${id}`).then(r => r.json());
}
  