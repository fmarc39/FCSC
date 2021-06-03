import { connect } from 'react-redux';
import ClientPage from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/ClientPage/index.js';
import {
  openAddPaymentModal,
  openAddCommentModal,
  fetchClientDataFromDb,
  openDeleteModal,
  openEditModal,
  openSuscribeModal,
} from 'actions/utils';

import { deleteComment } from 'actions/addComment.js';
import { deleteSub } from 'actions/Subscription';

const mapStateToProps = (state) => ({
  clientData: state.client.clientPage,
  comments: state.client.clientPage.comments,
});

const mapDispatchToProps = (dispatch) => ({
  openPaymentModal: () => {
    dispatch(openAddPaymentModal());
  },
  openAddCommentModal: () => {
    dispatch(openAddCommentModal());
  },
  fetchClientInfos: (clientId) => {
    dispatch(fetchClientDataFromDb(clientId));
  },
  deleteComment: (commentId) => {
    dispatch(deleteComment(commentId));
  },

  openDeleteConfirmationModal: () => {
    dispatch(openDeleteModal());
  },
  openEditClientModal: () => {
    dispatch(openEditModal());
  },
  openAddSuscriptionModal: () => {
    dispatch(openSuscribeModal());
  },
  handleDeleteSusb: (clientId) => {
    dispatch(deleteSub(clientId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientPage);