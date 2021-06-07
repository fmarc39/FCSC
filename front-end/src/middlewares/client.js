/* eslint-disable import/no-anonymous-default-export */
import api from '/Users/fmarc/Documents/Code/FCSC/front-end/src/api/api.js';
import {
  SUBMIT,
  SUBMIT_EDIT_CLIENT,
  FETCH_CLIENTS,
  saveClients,
  saveNewClient,
  HANDLE_SUBMIT_SEARCH_CLIENT,
} from 'actions/addClient';
import {
  closeAddClientModal,
  FETCH_CLIENT_DATA_FROM_DB,
  saveClientDataInState,
  closeAddCommentModal,
  DELETE_CLIENT,
  closeDeleteModal,
  closeEditClientModal,
  closeSuscriptionModal,
  closeAddPaymentModal,
} from 'actions/utils.js';
import {
  SUBMIT_ADD_COMMENT,
  saveNewComment,
  DELETE_COMMENT,
  deleteCommentInState,
} from 'actions/addComment.js';
import { SUBMIT_ADD_PAYMENT, saveNewPayment } from 'actions/addPayment.js';
import history from '../selectors/history';
import {
  HANDLE_SUBSRIPTION,
  saveSubscriptionInState,
  DELETE_SUB,
  deleteSubInState,
} from 'actions/Subscription.js';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT:
      const {
        firstName,
        lastName,
        commercialName,
        fixPhone,
        celPhone,
        email,
        adress,
        zipCode,
        city,
      } = store.getState().client;
      api
        .post('/addClient', {
          firstName,
          lastName,
          commercialName,
          fixPhone,
          celPhone,
          email,
          adress,
          zipCode,
          city,
        })
        .then((newClient) => {
          store.dispatch(saveNewClient(newClient.data.client));
          store.dispatch(closeAddClientModal());
        });
      return next(action);
    case FETCH_CLIENTS:
      api.get('/clients').then((response) => {
        store.dispatch(saveClients(response.data.clients));
      });
      return next(action);
    case SUBMIT_ADD_COMMENT:
      const { commentInput } = store.getState().client;
      api
        .post('/addComment', {
          commentInput,
          clientId: action.clientId,
        })
        .then((response) => {
          store.dispatch(saveNewComment(response.data.comment));
          store.dispatch(closeAddCommentModal());
        });
      return next(action);
    case SUBMIT_ADD_PAYMENT:
      api
        .post('/addPayment', {
          amount: action.amount,
          date: action.date,
          clientId: action.clientId,
        })
        .then((payment) => {
          console.log(payment.data.payments);
          store.dispatch(saveNewPayment(payment.data.payments));
          store.dispatch(closeAddPaymentModal());
        });
      return next(action);
    case FETCH_CLIENT_DATA_FROM_DB:
      api.get(`client/${action.clientId}`).then((client) => {
        store.dispatch(saveClientDataInState(client.data.client));
      });
      return next(action);
    case DELETE_COMMENT:
      api.delete(`/deleteComment/${action.commentId}`).then((comment) => {
        store.dispatch(deleteCommentInState(comment.data.id));
      });
      return next(action);

    case HANDLE_SUBMIT_SEARCH_CLIENT:
      const { searchInput, searchSelect } = store.getState().utils;
      api
        .get('/getFilterList', {
          params: { value: searchInput, filter: searchSelect },
        })
        .then((clients) => {
          console.log(clients);
          store.dispatch(saveClients(clients.data.result));
        });
      return next(action);
    case DELETE_CLIENT:
      api
        .delete(`/deleteClient/${action.clientId}`)
        .then((client) => {
          store.dispatch(closeDeleteModal());
          history.push('/home');
        })
        .catch((error) => console.log(error));
      return next(action);
    case HANDLE_SUBSRIPTION:
      api
        .patch('/addSubscription', {
          value: action.value,
          clientId: action.clientId,
        })
        .then((response) => {
          store.dispatch(saveSubscriptionInState(response.data.client[1][0]));
          store.dispatch(closeSuscriptionModal());
        })
        .catch((error) => console.log(error));
      return next(action);
    case DELETE_SUB:
      api.patch(`/deleteSub/${action.clientId}`).then((client) => {
        store.dispatch(deleteSubInState());
      });
      return next(action);
    case SUBMIT_EDIT_CLIENT:
      const {
        first_name,
        last_name,
        commercial_name,
        fix_phone,
        cel_phone,
        email: editMail,
        adress: editAdress,
        zip_code: editZipCode,
        city: editCity,
      } = store.getState().client.clientEditPage;
      api
        .patch(`/editClient`, {
          client_id: action.clientId,
          first_name,
          last_name,
          commercial_name,
          fix_phone,
          cel_phone,
          editMail,
          editAdress,
          editZipCode,
          editCity,
        })
        .then((newClient) => {
          store.dispatch(saveClientDataInState(newClient.data.client[1][0]));
          store.dispatch(closeEditClientModal());
        });
      return next(action);

    default:
      return next(action);
  }
};
