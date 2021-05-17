import { combineReducers } from 'redux';

import userReducer from './user';
import clientReducer from './client';
import utilsReducer from './utils';

const rootReducer = combineReducers({
  user: userReducer,
  client: clientReducer,
  utils: utilsReducer,
});

export default rootReducer;
