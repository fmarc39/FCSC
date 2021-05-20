import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '/Users/fmarc/Documents/Code/FCSC/front-end/src/reducers/index.js';
import signin from '/Users/fmarc/Documents/Code/FCSC/front-end/src/middlewares/signin.js';
import client from '/Users/fmarc/Documents/Code/FCSC/front-end/src/middlewares/client.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// On liste les middleware dans "applyMiddleware"
const enhancers = composeEnhancers(applyMiddleware(signin, client));

const store = createStore(reducer, enhancers);

export default store;
