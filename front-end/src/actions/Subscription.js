import { SAVE_CLIENT_DATA_IN_STATE } from './utils';

export const HANDLE_SUBSRIPTION = 'HANDLE_SUBSRIPTION';
export const SAVE_SUBSCRIPTION_IN_STATE = 'SAVE_SUBSCRIPTION_IN_STATE';
export const DELETE_SUB = 'DELETE_SUB';
export const DELETE_SUB_IN_STATE = 'DELETE_SUB_IN_STATE';

export const handlesubscription = (value, amount, clientId) => ({
  type: HANDLE_SUBSRIPTION,
  value,
  amount,
  clientId,
});

export const saveSubscriptionInState = (payload) => ({
  type: SAVE_SUBSCRIPTION_IN_STATE,
  payload,
});

export const deleteSub = (clientId) => ({
  type: DELETE_SUB,
  clientId,
});

export const deleteSubInState = () => ({
  type: DELETE_SUB_IN_STATE,
});
