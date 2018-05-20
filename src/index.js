import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import registerServiceWorker from './utils/registerServiceWorker';
import {loadSubjects} from './actions/subjectActions';

const store = configureStore();

store.dispatch(loadSubjects());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();