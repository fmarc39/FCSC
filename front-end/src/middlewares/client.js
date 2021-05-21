/* eslint-disable import/no-anonymous-default-export */
import api from '/Users/fmarc/Documents/Code/FCSC/front-end/src/api/api.js';
import {
  SUBMIT,
  FETCH_CLIENTS,
  saveClients,
  saveNewClient,
} from 'actions/addClient';
import { closeAddClientModal } from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/utils.js';
import { SUBMIT_ADD_COMMENT } from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/addComment.js';

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
          console.log(newClient.data.client);
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
      api.post('/addComment', {
        commentInput,
        clientId: 1,
      });
      return next(action);
    default:
      return next(action);
  }
};
