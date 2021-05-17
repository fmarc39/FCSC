import {
  OPEN_ADD_CLIENT_MODAL,
  CLOSE_ADD_CLIENT_MODAL,
} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/utils.js';

const initialState = {
  addClientModal: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_ADD_CLIENT_MODAL:
      return {
        ...state,
        addClientModal: true,
      };
    case CLOSE_ADD_CLIENT_MODAL:
      return {
        ...state,
        addClientModal: false,
      };
    default:
      return state;
  }
};

export default reducer;
