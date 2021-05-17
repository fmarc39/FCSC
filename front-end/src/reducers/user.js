import {
  HANDLE_CHANGE,
  IS_SIGNIN,
  LOGOUT,
} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/user.js';

const initialState = {
  email: '',
  password: '',
  isAuth: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    case IS_SIGNIN:
      return {
        ...state,
        isAuth: true,
      };
    case LOGOUT:
      localStorage.removeItem('user');
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default reducer;
