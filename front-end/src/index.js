import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/containers/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from '../src/selectors/history';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import {
  store,
  persistor,
} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/store/store.js';
import { PersistGate } from 'redux-persist/integration/react';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#84adcf',
    },
    secondary: {
      main: '#A0C0DA',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </PersistGate>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
