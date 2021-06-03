export const CHANGE_INPUT = 'CHANGE_INPUT';
export const CHANGE_EDIT_INPUT = 'CHANGE_EDIT_INPUT';
export const SUBMIT = 'SUBMIT';
export const SUBMIT_EDIT_CLIENT = 'SUBMIT_EDIT_CLIENT';
export const FETCH_CLIENTS = 'FETCH_CLIENTS';
export const SAVE_CLIENTS = 'SAVE_CLIENTS';
export const SAVE_NEW_CLIENT = 'SAVE_NEW_CLIENT';
export const HANDLE_SEARCH_INPUT_CHANGE = 'HANDLE_SEARCH_INPUT_CHANGE';
export const HANDLE_SUBMIT_SEARCH_CLIENT = 'HANDLE_SUBMIT_SEARCH_CLIENT';

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

export const handleSearchInputChange = (value, fieldName) => ({
  type: HANDLE_SEARCH_INPUT_CHANGE,
  value,
  fieldName,
});

export const changeEditInput = (value, fieldName) => ({
  type: CHANGE_EDIT_INPUT,
  value,
  fieldName,
});

export const handleSubmitSearchClient = () => ({
  type: HANDLE_SUBMIT_SEARCH_CLIENT,
});

export const submitEditClient = (clientId) => ({
  type: SUBMIT_EDIT_CLIENT,
  clientId,
});
