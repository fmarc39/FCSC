export const CHANGE_INPUT_ADD_COMMENT = 'CHANGE_INPUT_ADD_COMMENT';
export const SUBMIT_ADD_COMMENT = 'SUBMIT_ADD_COMMENT';

export const changeInputAddComment = (value, fieldName) => ({
  type: CHANGE_INPUT_ADD_COMMENT,
  value,
  fieldName,
});

export const submitAddComment = () => ({
  type: SUBMIT_ADD_COMMENT,
});
