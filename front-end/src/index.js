import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from '../src/selectors/history';
import store from '/Users/fmarc/Documents/Code/FCSC/front-end/src/store/store.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
