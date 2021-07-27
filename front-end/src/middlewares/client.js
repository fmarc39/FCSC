/* eslint-disable import/no-anonymous-default-export */
import api from '/Users/fmarc/Documents/Code/FCSC/front-end/src/api/api.js';
import history from '../selectors/history';

import {
  SUBMIT,
  SUBMIT_EDIT_CLIENT,
  FETCH_CLIENTS,
  saveClients,
  saveNewClient,
  HANDLE_SUBMIT_SEARCH_CLIENT,
} from '../actions/addClient';
import {
  closeAddClientModal,
  FETCH_CLIENT_DATA_FROM_DB,
  saveClientDataInState,
  saveEditedClientDataInSate,
  closeAddCommentModal,
  DELETE_CLIENT,
  closeDeleteModal,
  closeEditClientModal,
  closeSuscriptionModal,
  closeAddPaymentModal,
} from '../actions/utils.js';
import {
  SUBMIT_ADD_COMMENT,
  saveNewComment,
  DELETE_COMMENT,
  deleteCommentInState,
} from '../actions/addComment.js';
import {
  SUBMIT_ADD_PAYMENT,
  saveNewPayment,
  DELTE_PAYMENT,
  deletePaymentInState,
  UPDATE_DEBT,
  saveUpdatedDebtInSate,
} from '../actions/addPayment.js';

import {
  HANDLE_SUBSRIPTION,
  saveSubscriptionInState,
  DELETE_SUB,
  deleteSubInState,
} from '../actions/Subscription.js';

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
        .post(
          '/addClient',
          {
            firstName,
            lastName,
            commercialName,
            fixPhone,
            celPhone,
            email,
            adress,
            zipCode,
            city,
          },
          {
            headers: { 'x-access-token': store.getState().user.accessToken },
          }
        )
        .then((newClient) => {
          store.dispatch(saveNewClient(newClient.data.client));
          store.dispatch(closeAddClientModal());
        });
      return next(action);
    case FETCH_CLIENTS:
      api
        .get('/clients', {
          headers: { 'x-access-token': store.getState().user.accessToken },
        })
        .then((response) => {
          store.dispatch(saveClients(response.data.clients));
        })
        .catch((error) => {
          history.push('/');
        });
      return next(action);
    case SUBMIT_ADD_COMMENT:
      const { commentInput } = store.getState().client;
      api
        .post(
          '/addComment',
          {
            commentInput,
            clientId: action.clientId,
          },
          {
            headers: { 'x-access-token': store.getState().user.accessToken },
          }
        )
        .then((response) => {
          store.dispatch(saveNewComment(response.data.comment));
          store.dispatch(closeAddCommentModal());
        })
        .catch((error) => {
          if (error.response.status === 403) {
            history.push('/');
          }
        });
      return next(action);
    case SUBMIT_ADD_PAYMENT:
      api
        .post(
          '/addPayment',
          {
            amount: action.amount,
            date: action.date,
            clientId: action.clientId,
            debt: action.newDebt,
          },
          {
            headers: { 'x-access-token': store.getState().user.accessToken },
          }
        )
        .then((payment) => {
          console.log(payment.data.payments);
          store.dispatch(saveNewPayment(payment.data.payments));
          store.dispatch(closeAddPaymentModal());
        })
        .catch((error) => {
          if (error.response.status === 403) {
            history.push('/');
          }
        });
      return next(action);
    case FETCH_CLIENT_DATA_FROM_DB:
      api
        .get(`client/${action.clientId}`, {
          headers: { 'x-access-token': store.getState().user.accessToken },
        })
        .then((client) => {
          store.dispatch(saveClientDataInState(client.data.client));
        })
        .catch((error) => {
          if (error.response.status === 403) {
            history.push('/');
          }
        });
      return next(action);
    case UPDATE_DEBT:
      api
        .patch(
          '/updateDebt',
          {
            debt: action.newDebt,
            clientId: action.clientId,
          },
          {
            headers: { 'x-access-token': store.getState().user.accessToken },
          }
        )
        .then((apiResponse) => {
          store.dispatch(
            saveUpdatedDebtInSate(apiResponse.data.debt[1][0].debt)
          );
        });
      return next(action);
    case DELETE_COMMENT:
      api
        .delete(`/deleteComment/${action.commentId}`, {
          headers: { 'x-access-token': store.getState().user.accessToken },
        })
        .then((comment) => {
          store.dispatch(deleteCommentInState(comment.data.id));
        })
        .catch((error) => {
          if (error.response.status === 403) {
            history.push('/');
          }
        });
      return next(action);
    case DELTE_PAYMENT:
      api
        .delete(`/deletePayment/${action.paymentId}`, {
          headers: { 'x-access-token': store.getState().user.accessToken },
        })
        .then((payment) => {
          store.dispatch(deletePaymentInState(payment.data.id));
        })
        .catch((error) => {
          if (error.response.status === 403) {
            history.push('/');
          }
        });
      return next(action);
    case HANDLE_SUBMIT_SEARCH_CLIENT:
      const { searchInput, searchSelect } = store.getState().utils;
      api
        .get('/getFilterList', {
          params: { value: searchInput, filter: searchSelect },
          headers: { 'x-access-token': store.getState().user.accessToken },
        })
        .then((clients) => {
          console.log(clients);
          store.dispatch(saveClients(clients.data.result));
        })
        .catch((error) => {
          if (error.response.status === 403) {
            history.push('/');
          }
        });
      return next(action);
    case DELETE_CLIENT:
      api
        .delete(`/deleteClient/${action.clientId}`, {
          headers: { 'x-access-token': store.getState().user.accessToken },
        })
        .then((client) => {
          store.dispatch(closeDeleteModal());
          history.push('/home');
        })
        .catch((error) => console.log(error));
      return next(action);
    case HANDLE_SUBSRIPTION:
      api
        .patch(
          '/addSubscription',
          {
            value: action.value,
            amount: action.amount,
            clientId: action.clientId,
          },
          {
            headers: { 'x-access-token': store.getState().user.accessToken },
          }
        )
        .then((response) => {
          store.dispatch(saveSubscriptionInState(response.data.client[1][0]));
          store.dispatch(closeSuscriptionModal());
        })
        .catch((error) => {
          if (error.response.status === 403) {
            history.push('/');
          }
        });
      return next(action);
    case DELETE_SUB:
      api
        .patch(
          '/deleteSub',
          {
            client_id: action.clientId,
          },
          {
            headers: { 'x-access-token': store.getState().user.accessToken },
          }
        )
        .then((client) => {
          store.dispatch(deleteSubInState());
        })
        .catch((error) => {
          if (error.response.status === 403) {
            history.push('/');
          }
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
        .patch(
          `/editClient`,
          {
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
          },
          {
            headers: { 'x-access-token': store.getState().user.accessToken },
          }
        )
        .then((newClient) => {
          store.dispatch(
            saveEditedClientDataInSate(newClient.data.client[1][0])
          );
          store.dispatch(closeEditClientModal());
        })
        .catch((error) => {
          if (error.response.status === 403) {
            history.push('/');
          }
        });
      return next(action);

    default:
      return next(action);
  }
};
