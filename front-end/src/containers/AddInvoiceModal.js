import { connect } from 'react-redux';
import AddInvoiceModal from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/AddInvoiceModal/index';
import {} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/addClient.js';
import {
  closeInvoiceModal,
  submitInvoice,
} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/utils';

const mapStateToProps = (state) => ({
  isOpen: state.utils.addInvoiceModal,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => {
    dispatch(closeInvoiceModal());
  },
  invoiceCreate: (invoice) => {
    dispatch(submitInvoice(invoice));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddInvoiceModal);
