export const CHANGE_INPUT_ADD_PAYMENT = 'CHANGE_INPUT_ADD_PAYMENT';
export const SUBMIT_ADD_PAYMENT = 'SUBMIT_ADD_PAYMENT';

export const changeInputAddPayment = (value, fieldName) => ({
  type: CHANGE_INPUT_ADD_PAYMENT,
  value,
  fieldName,
});

export const submitAddPayment = (amount, date) => ({
  type: SUBMIT_ADD_PAYMENT,
  amount,
  date,
});
