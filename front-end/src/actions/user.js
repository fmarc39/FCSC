export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const HANDLE_SIGNIN = 'HANDLE_SIGNIN';
export const IS_SIGNIN = 'IS_SIGNIN';
export const LOGOUT = 'LOGOUT';

export const handleChange = (fieldName, fieldValue) => ({
  type: HANDLE_CHANGE,
  fieldName,
  fieldValue,
});

export const handleSignin = () => ({
  type: HANDLE_SIGNIN,
});

export const IsSignIn = () => ({
  type: IS_SIGNIN,
});

export const logout = () => ({
  type: LOGOUT,
});
