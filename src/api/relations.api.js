
export const getRelations = (id) =>
  fetch(`http://localhost:5000/subjects/${id}/relations`).then(r => r.json());
