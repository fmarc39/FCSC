import {
  OPEN_ADD_CLIENT_MODAL,
  CLOSE_ADD_CLIENT_MODAL,
  OPEN_ADD_PAYMENT_MODAL,
  CLOSE_ADD_PAYMENT_MODAL,
  OPEN_ADD_COMMENT_MODAL,
  OPEN_INVOICE_MODAL,
  CLOSE_INVOICE_MODAL,
  CLOSE_ADD_COMMENT_MODAL,
  CLOSE_SUSCRIPTION_MODAL,
  OPEN_DELETE_MODAL,
  CLOSE_DELETE_MODAL,
  CLOSE_EDIT_CLIENT_MODAL,
  OPEN_EDIT_CLIENT_MODAL,
  OPEN_SUSCRIBE_MODAL,
  OPEN_SNACK_PWD,
  OPEN_SNACK_MAIL,
  CLOSE_SNACK,
} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/utils.js';

import { HANDLE_SEARCH_INPUT_CHANGE } from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/addClient.js';

const initialState = {
  addClientModal: false,
  addPaymentModal: false,
  addCommentModal: false,
  addInvoiceModal: false,
  addSuscriptionModal: false,
  deleteClientModal: false,
  editClientModal: false,
  searchInput: '',
  searchSelect: 'commercial_name',
  snackMail: false,
  snackPwd: false,
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
    case HANDLE_SEARCH_INPUT_CHANGE:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case OPEN_DELETE_MODAL:
      return {
        ...state,
        deleteClientModal: true,
      };
    case CLOSE_DELETE_MODAL:
      return {
        ...state,
        deleteClientModal: false,
      };
    case CLOSE_EDIT_CLIENT_MODAL:
      return {
        ...state,
        editClientModal: false,
      };
    case OPEN_EDIT_CLIENT_MODAL:
      return {
        ...state,
        editClientModal: true,
      };
    case OPEN_SUSCRIBE_MODAL:
      return {
        ...state,
        addSuscriptionModal: true,
      };
    case CLOSE_SUSCRIPTION_MODAL:
      return {
        ...state,
        addSuscriptionModal: false,
      };
    case OPEN_SNACK_MAIL:
      return {
        ...state,
        snackMail: true,
      };
    case OPEN_SNACK_PWD:
      return {
        ...state,
        snackPwd: true,
      };
    case CLOSE_SNACK:
      return {
        ...state,
        snackPwd: false,
        snackMail: false,
      };
    case OPEN_INVOICE_MODAL:
      return {
        ...state,
        addInvoiceModal: true,
      };
    case CLOSE_INVOICE_MODAL:
      return {
        ...state,
        addInvoiceModal: false,
      };
    default:
      return state;
  }
};

export default reducer;
