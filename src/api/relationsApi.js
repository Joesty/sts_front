class RelationsApi {
  static getRelations(id) {
    url =  'http://localhost:5000/subjects/' + id + '/relations';
    return fetch(url).then(response => {
      return response.json()
    }).catch(error => {
      return error
    });
  }
};

export default RelationsApi;