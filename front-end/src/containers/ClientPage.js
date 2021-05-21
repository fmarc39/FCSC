import { connect } from 'react-redux';
import ClientPage from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/ClientPage/index.js';
import {
  openAddPaymentModal,
  openAddCommentModal,
} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/utils';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  openPaymentModal: () => {
    dispatch(openAddPaymentModal());
  },
  openAddCommentModal: () => {
    dispatch(openAddCommentModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientPage);
