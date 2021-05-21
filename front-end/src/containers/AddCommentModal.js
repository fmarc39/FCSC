import { connect } from 'react-redux';
import AddCommentModal from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/AddCommentModal/index.js';
import {
  changeInputAddComment,
  submitAddComment,
} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/addComment.js';
import { closeAddCommentModal } from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/utils';

const mapStateToProps = (state) => ({
  isOpen: state.utils.addCommentModal,
  value: state.client.commentInput,
});

const mapDispatchToProps = (dispatch) => ({
  changeInput: (value) => {
    dispatch(changeInputAddComment(value));
  },
  closeModal: () => {
    dispatch(closeAddCommentModal());
  },

  handleSubmit: () => {
    dispatch(submitAddComment());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentModal);
