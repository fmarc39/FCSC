import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user';
import clientReducer from './client';
import utilsReducer from './utils';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user: userReducer,
  client: clientReducer,
  utils: utilsReducer,
});

export default persistReducer(persistConfig, rootReducer);
