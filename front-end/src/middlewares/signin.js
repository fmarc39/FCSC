/* eslint-disable import/no-anonymous-default-export */
import api from '/Users/fmarc/Documents/Code/FCSC/front-end/src/api/api.js';
import {
  HANDLE_SIGNIN,
  IsSignIn,
  LoginRedirect,
} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/user.js';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_SIGNIN:
      const { email, password } = store.getState().user;
      api.post('login', { email, password }).then((user) => {
        if (user.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(user.data));
          store.dispatch(IsSignIn());
        }
      });
      return next(action);
    default:
      return next(action);
  }
};
