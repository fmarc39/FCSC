import { connect } from 'react-redux';
import AddInvoiceModal from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/AddInvoiceModal/index';
import {} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/addClient.js';
import {
  closeInvoiceModal,
  submitInvoice,
} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/utils';

import {
  editInvoiceModal,
  editInvoiceModalModalItems,
} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/addInvoice';

const mapStateToProps = (state) => ({
  isOpen: state.utils.addInvoiceModal,
  clientDataInvoice: state.client.invoiceInfos,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => {
    dispatch(closeInvoiceModal());
  },
  invoiceCreate: (invoice) => {
    dispatch(submitInvoice(invoice));
  },
  handleInvoiceChange: (fieldName, value) => {
    dispatch(editInvoiceModal(fieldName, value));
  },
  handleInvoiceChangeItems: (fieldName, value) => {
    dispatch(editInvoiceModalModalItems(fieldName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddInvoiceModal);
