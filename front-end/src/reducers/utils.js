import {
  OPEN_ADD_CLIENT_MODAL,
  CLOSE_ADD_CLIENT_MODAL,
  OPEN_ADD_PAYMENT_MODAL,
  CLOSE_ADD_PAYMENT_MODAL,
  OPEN_ADD_COMMENT_MODAL,
  CLOSE_ADD_COMMENT_MODAL,
} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/utils.js';

const initialState = {
  addClientModal: false,
  addPaymentModal: false,
  addCommentModal: false,
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
    case OPEN_ADD_PAYMENT_MODAL:
      return {
        ...state,
        addPaymentModal: true,
      };
    case CLOSE_ADD_PAYMENT_MODAL:
      return {
        ...state,
        addPaymentModal: false,
      };
    case OPEN_ADD_COMMENT_MODAL:
      return {
        ...state,
        addCommentModal: true,
      };
    case CLOSE_ADD_COMMENT_MODAL:
      return {
        ...state,
        addCommentModal: false,
      };
    default:
      return state;
  }
};

export default reducer;
