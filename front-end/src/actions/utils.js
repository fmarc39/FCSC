export const OPEN_ADD_CLIENT_MODAL = 'OPEN_ADD_CLIENT_MODAL';
export const CLOSE_ADD_CLIENT_MODAL = 'CLOSE_ADD_CLIENT_MODAL';
export const OPEN_ADD_PAYMENT_MODAL = 'OPEN_ADD_PAYMENT_MODAL';
export const CLOSE_ADD_PAYMENT_MODAL = 'CLOSE_ADD_PAYMENT_MODAL';
export const OPEN_ADD_COMMENT_MODAL = 'OPEN_ADD_COMMENT_MODAL';
export const CLOSE_ADD_COMMENT_MODAL = 'CLOSE_ADD_COMMENT_MODAL';

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
