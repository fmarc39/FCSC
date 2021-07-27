/* eslint-disable import/no-anonymous-default-export */
import api from '/Users/fmarc/Documents/Code/FCSC/front-end/src/api/api.js';
import {
  HANDLE_SIGNIN,
  IsSignIn,
} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/user.js';

import { OpenSnackMail, OpenSnackPwd } from '../actions/utils';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_SIGNIN:
      const { email, password } = store.getState().user;
      api
        .post('login', { email, password })
        .then((user) => {
          if (user.data.accessToken) {
            store.dispatch(IsSignIn(user.data));
          } else {
            console.log('error');
          }
        })
        .catch((error) => {
          if (error.response.data.code === 'mail') {
            store.dispatch(OpenSnackMail());
          }
          if (error.response.data.code === 'password') {
            store.dispatch(OpenSnackPwd());
          }

          console.log(error);
        });
      return next(action);
    default:
      return next(action);
  }
};
