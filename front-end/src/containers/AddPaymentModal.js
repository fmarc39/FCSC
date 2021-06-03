import { connect } from 'react-redux';
import AddPaymentModal from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/AddPaymentModal/index.js';
import {
  changeInputAddPayment,
  submitAddPayment,
} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/addPayment.js';
import { closeAddPaymentModal } from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/utils';

const mapStateToProps = (state) => ({
  isOpen: state.utils.addPaymentModal,
});

const mapDispatchToProps = (dispatch) => ({
  changeInput: (value, fieldName) => {
    dispatch(changeInputAddPayment(value, fieldName));
  },
  closeModal: () => {
    dispatch(closeAddPaymentModal());
  },

  handleSubmit: (amount, date) => {
    dispatch(submitAddPayment(amount, date));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPaymentModal);
