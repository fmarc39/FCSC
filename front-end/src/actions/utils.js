export const OPEN_ADD_CLIENT_MODAL = 'OPEN_ADD_CLIENT_MODAL';
export const CLOSE_ADD_CLIENT_MODAL = 'CLOSE_ADD_CLIENT_MODAL';
export const OPEN_ADD_PAYMENT_MODAL = 'OPEN_ADD_PAYMENT_MODAL';
export const CLOSE_ADD_PAYMENT_MODAL = 'CLOSE_ADD_PAYMENT_MODAL';
export const OPEN_ADD_COMMENT_MODAL = 'OPEN_ADD_COMMENT_MODAL';
export const CLOSE_ADD_COMMENT_MODAL = 'CLOSE_ADD_COMMENT_MODAL';
export const FETCH_CLIENT_DATA_FROM_DB = 'FETCH_CLIENT_DATA_FROM_DB';
export const SAVE_CLIENT_DATA_IN_STATE = 'SAVE_CLIENT_DATA_IN_STATE';
export const SAVE_EDITED_CLIENT_DATA_IN_STATE =
  'SAVE_EDITED_CLIENT_DATA_IN_STATE';
export const DELETE_CLIENT = 'DELETE_CLIENT';
export const OPEN_DELETE_MODAL = 'OPEN_DELETE_MODAL';
export const CLOSE_DELETE_MODAL = 'CLOSE_DELETE_MODAL';
export const CLOSE_EDIT_CLIENT_MODAL = 'CLOSE_EDIT_CLIENT_MODAL';
export const OPEN_EDIT_CLIENT_MODAL = 'OPEN_EDIT_CLIENT_MODAL';
export const OPEN_SUSCRIBE_MODAL = 'OPEN_SUSCRIBE_MODAL';
export const CLOSE_SUSCRIPTION_MODAL = 'CLOSE_SUSCRIPTION_MODAL';
export const GET_FILTER_LIST = 'GET_FILTER_LIST';
export const OPEN_SNACK_MAIL = 'OPEN_SNACK_MAIL';
export const OPEN_SNACK_PWD = 'OPEN_SNACK_PWD';
export const CLOSE_SNACK = 'CLOSE_SNACK';

export const openAddClientModal = () => ({
  type: OPEN_ADD_CLIENT_MODAL,
});

export const closeAddClientModal = () => ({
  type: CLOSE_ADD_CLIENT_MODAL,
});

export const openAddPaymentModal = () => ({
  type: OPEN_ADD_PAYMENT_MODAL,
});

export const closeAddPaymentModal = () => ({
  type: CLOSE_ADD_PAYMENT_MODAL,
});

export const openAddCommentModal = () => ({
  type: OPEN_ADD_COMMENT_MODAL,
});

export const closeAddCommentModal = () => ({
  type: CLOSE_ADD_COMMENT_MODAL,
});

export const fetchClientDataFromDb = (clientId) => ({
  type: FETCH_CLIENT_DATA_FROM_DB,
  clientId,
});

export const saveClientDataInState = (payload) => ({
  type: SAVE_CLIENT_DATA_IN_STATE,
  payload,
});

export const deleteClient = (clientId) => ({
  type: DELETE_CLIENT,
  clientId,
});

export const openDeleteModal = () => ({
  type: OPEN_DELETE_MODAL,
});

export const closeDeleteModal = () => ({
  type: CLOSE_DELETE_MODAL,
});

export const closeEditClientModal = () => ({
  type: CLOSE_EDIT_CLIENT_MODAL,
});

export const openEditModal = () => ({
  type: OPEN_EDIT_CLIENT_MODAL,
});

export const openSuscribeModal = () => ({
  type: OPEN_SUSCRIBE_MODAL,
});

export const closeSuscriptionModal = () => ({
  type: CLOSE_SUSCRIPTION_MODAL,
});

export const saveEditedClientDataInSate = (payload) => ({
  type: SAVE_EDITED_CLIENT_DATA_IN_STATE,
  payload,
});

export const GetFilterList = () => ({
  type: GET_FILTER_LIST,
});

export const OpenSnackMail = () => ({
  type: OPEN_SNACK_MAIL,
});

export const OpenSnackPwd = () => ({
  type: OPEN_SNACK_PWD,
});

export const closeSnack = () => ({
  type: CLOSE_SNACK,
});
