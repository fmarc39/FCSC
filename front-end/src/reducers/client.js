import { act } from '@testing-library/react';
import {
  CHANGE_INPUT,
  SAVE_CLIENTS,
  SAVE_NEW_CLIENT,
  CHANGE_EDIT_INPUT,
} from 'actions/addClient.js';
import {
  CHANGE_INPUT_ADD_COMMENT,
  SAVE_NEW_COMMENT,
  DELETE_COMMENT_IN_STATE,
} from 'actions/addComment.js';
import { SAVE_CLIENT_DATA_IN_STATE } from 'actions/utils';
import {
  SAVE_SUBSCRIPTION_IN_STATE,
  DELETE_SUB_IN_STATE,
} from 'actions/Subscription';

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
        },
      };
    case DELETE_SUB_IN_STATE:
      return {
        ...state,
        clientPage: {
          ...state.clientPage,
          subscription: null,
        },
      };
    default:
      return state;
  }
};

export default reducer;
