export const getGraph = () => {
  return Promise.resolve().then( () => {
  var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    return values;
  });
}

export const addGraph = (value) => {
  return Promise.resolve(value).then( (value) => {
    localStorage.setItem(value.id, JSON.stringify(value));
  });
}

const asyncLocalStorage = {
  setItem: function (key, value) {
      return Promise.resolve().then(function () {
          localStorage.setItem(key, value);
      });
  },
  getItem: function (key) {
      return Promise.resolve().then(function () {
          return localStorage.getItem(key);
      });
  }
};

export const removeGraph = (key) => {
  return Promise.resolve(key).then( (key) => {
    localStorage.removeItem(key);
  });
}