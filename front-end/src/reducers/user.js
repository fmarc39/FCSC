import {
  HANDLE_CHANGE,
  IS_SIGNIN,
  LOGOUT,
} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/user.js';
import history from '../selectors/history';

const initialState = {
  email: '',
  password: '',
  accessToken: '',
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
        accessToken: action.payload.accessToken,
      };

    case LOGOUT:
      history.push('/');
      return {
        ...state,
        isAuth: false,
        email: '',
        password: '',
        accessToken: '',
      };

    default:
      return state;
  }
};

export default reducer;
