export const CHANGE_INPUT = 'CHANGE_INPUT';

export const changeInput = (value, fieldName) => ({
  type: CHANGE_INPUT,
  value,
  fieldName,
});
