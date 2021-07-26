import { connect } from 'react-redux';
import AddPaymentModal from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/AddPaymentModal/index.js';
import {
  changeInputAddPayment,
  submitAddPayment,
  updateDebt,
} from '../actions/addPayment.js';
import { closeAddPaymentModal } from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/utils';

const mapStateToProps = (state) => ({
  isOpen: state.utils.addPaymentModal,
  debt: state.client.clientPage.debt,
});

const mapDispatchToProps = (dispatch) => ({
  changeInput: (value, fieldName) => {
    dispatch(changeInputAddPayment(value, fieldName));
  },
  closeModal: () => {
    dispatch(closeAddPaymentModal());
  },

  handleSubmit: (amount, date, clientId) => {
    dispatch(submitAddPayment(amount, date, clientId));
  },
  handleNewDebt: (newDebt, clientId) => {
    dispatch(updateDebt(newDebt, clientId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPaymentModal);
