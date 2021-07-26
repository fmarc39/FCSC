import {
  CHANGE_INPUT,
  SAVE_CLIENTS,
  SAVE_NEW_CLIENT,
  CHANGE_EDIT_INPUT,
} from '../actions/addClient.js';
import {
  CHANGE_INPUT_ADD_COMMENT,
  SAVE_NEW_COMMENT,
  DELETE_COMMENT_IN_STATE,
} from '../actions/addComment.js';
import {
  SAVE_CLIENT_DATA_IN_STATE,
  SAVE_EDITED_CLIENT_DATA_IN_STATE,
  GET_FILTER_LIST,
} from '../actions/utils';
import {
  SAVE_SUBSCRIPTION_IN_STATE,
  DELETE_SUB_IN_STATE,
} from '../actions/Subscription';
import {
  SAVE_NEW_PAYMENT,
  DELETE_PAYMENT_IN_STATE,
  SAVE_UPDATED_DEBT_IN_STATE,
} from '../actions/addPayment';

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
  commentInput: '',
  clientList: [],
  clientPage: '',
  clientEditPage: '',
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
    case CHANGE_INPUT_ADD_COMMENT:
      return {
        ...state,
        commentInput: action.value,
      };
    case SAVE_NEW_COMMENT:
      return {
        ...state,
        clientPage: {
          ...state.clientPage,
          comments: [...state.clientPage.comments, action.comment],
        },
        commentInput: '',
      };

    case SAVE_CLIENT_DATA_IN_STATE:
      return {
        ...state,
        clientPage: action.payload,
        clientEditPage: action.payload,
      };
    case DELETE_COMMENT_IN_STATE:
      return {
        ...state,
        clientPage: {
          ...state.clientPage,
          comments: state.clientPage.comments.filter(
            (comment) => Number(comment.id) !== Number(action.commentId)
          ),
        },
      };
    case CHANGE_EDIT_INPUT:
      return {
        ...state,
        clientEditPage: {
          ...state.clientEditPage,
          [action.fieldName]: action.value,
        },
      };
    case SAVE_SUBSCRIPTION_IN_STATE:
      return {
        ...state,
        clientPage: {
          ...state.clientPage,
          subscription: action.payload.subscription,
          sub_price: action.payload.sub_price,
          debt: action.payload.sub_price,
        },
      };
    case DELETE_SUB_IN_STATE:
      return {
        ...state,
        clientPage: {
          ...state.clientPage,
          subscription: null,
          debt: null,
          sub_price: null,
        },
      };
    case SAVE_NEW_PAYMENT:
      return {
        ...state,
        clientPage: {
          ...state.clientPage,
          payments: [...state.clientPage.payments, action.payload],
        },
      };
    case DELETE_PAYMENT_IN_STATE:
      return {
        ...state,
        clientPage: {
          ...state.clientPage,
          payments: state.clientPage.payments.filter(
            (payment) => Number(payment.id) !== Number(action.paymentId)
          ),
        },
      };
    case SAVE_UPDATED_DEBT_IN_STATE:
      return {
        ...state,
        clientPage: {
          ...state.clientPage,
          debt: action.newDebt,
        },
      };
    case SAVE_EDITED_CLIENT_DATA_IN_STATE:
      return {
        ...state,
        clientPage: {
          ...state.clientPage,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          commercial_name: action.payload.commercial_name,
          fix_phone: action.payload.fix_phone,
          cel_phone: action.payload.cel_phone,
          email: action.payload.email,
          adress: action.payload.adress,
          zip_code: action.payload.zip_code,
          city: action.payload.city,
        },
      };
    case GET_FILTER_LIST:
      return {
        ...state,
        clientList: state.clientList.filter((client) => {
          if (client.debt !== null) {
            return client;
          }
        }),
      };
    default:
      return state;
  }
};

export default reducer;
