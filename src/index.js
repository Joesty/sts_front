import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './reducers';
import { initialize } from './actions/shared.actions';

const store = configureStore();

//loading init data to state
store.dispatch(initialize());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));