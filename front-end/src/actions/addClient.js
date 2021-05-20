export const CHANGE_INPUT = 'CHANGE_INPUT';
export const SUBMIT = 'SUBMIT';
export const FETCH_CLIENTS = 'FETCH_CLIENTS';
export const SAVE_CLIENTS = 'SAVE_CLIENTS';
export const SAVE_NEW_CLIENT = 'SAVE_NEW_CLIENT';

export const changeInput = (value, fieldName) => ({
  type: CHANGE_INPUT,
  value,
  fieldName,
});

export const submit = () => ({
  type: SUBMIT,
});

export const fetchClients = () => ({
  type: FETCH_CLIENTS,
});

export const saveClients = (payload) => ({
  type: SAVE_CLIENTS,
  payload,
});

export const saveNewClient = (payload) => ({
  type: SAVE_NEW_CLIENT,
  payload,
});
