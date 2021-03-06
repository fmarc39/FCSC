export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const HANDLE_SIGNIN = 'HANDLE_SIGNIN';
export const IS_SIGNIN = 'IS_SIGNIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_REDIRECT = 'LOGIN_REDIRECT';

export const handleChange = (fieldName, fieldValue) => ({
  type: HANDLE_CHANGE,
  fieldName,
  fieldValue,
});

export const handleSignin = () => ({
  type: HANDLE_SIGNIN,
});

export const IsSignIn = (payload) => ({
  type: IS_SIGNIN,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});

export const LoginRedirect = () => ({
  type: LOGIN_REDIRECT,
});
