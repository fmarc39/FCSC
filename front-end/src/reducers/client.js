import { Switch } from 'react-router';
import { CHANGE_INPUT } from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/addClient.js';

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
  siren: '',
  clientList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
