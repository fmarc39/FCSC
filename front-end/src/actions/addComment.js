export const CHANGE_INPUT_ADD_COMMENT = 'CHANGE_INPUT_ADD_COMMENT';
export const SUBMIT_ADD_COMMENT = 'SUBMIT_ADD_COMMENT';
export const SAVE_NEW_COMMENT = 'SAVE_NEW_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_COMMENT_IN_STATE = 'DELETE_COMMENT_IN_STATE';

export const changeInputAddComment = (value, fieldName) => ({
  type: CHANGE_INPUT_ADD_COMMENT,
  value,
  fieldName,
});

export const submitAddComment = (clientId) => ({
  type: SUBMIT_ADD_COMMENT,
  clientId,
});

export const saveNewComment = (comment) => ({
  type: SAVE_NEW_COMMENT,
  comment,
});

export const deleteComment = (commentId) => ({
  type: DELETE_COMMENT,
  commentId,
});

export const deleteCommentInState = (commentId) => ({
  type: DELETE_COMMENT_IN_STATE,
  commentId,
});
