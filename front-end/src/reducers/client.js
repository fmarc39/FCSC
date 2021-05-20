import {
  CHANGE_INPUT,
  SAVE_CLIENTS,
  SAVE_NEW_CLIENT,
} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/addClient.js';

const initialState = {
  firstName: '',
  lastName: '',
  commercialName: '',
  fixPhone: '',
  celPhone: '',
  email: '',
  adress: '',
  zipCode: '',
  city: '',
  clientList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case SAVE_CLIENTS:
      return {
        ...state,
        clientList: action.payload,
      };
    case SAVE_NEW_CLIENT:
      return {
        ...state,
        clientList: [...state.clientList, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
