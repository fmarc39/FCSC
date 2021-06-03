import { connect } from 'react-redux';
import EditClientModal from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/EditClientModal/index.js';
import {
  changeEditInput,
  submit,
  submitEditClient,
} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/addClient.js';
import { closeEditClientModal } from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/utils';

const mapStateToProps = (state) => ({
  isOpen: state.utils.editClientModal,
  first_name: state.client.clientEditPage.first_name,
  last_name: state.client.clientEditPage.last_name,
  commercial_name: state.client.clientEditPage.commercial_name,
  fix_phone: state.client.clientEditPage.fix_phone,
  cel_phone: state.client.clientEditPage.cel_phone,
  email: state.client.clientEditPage.email,
  adress: state.client.clientEditPage.adress,
  zip_code: state.client.clientEditPage.zip_code,
  city: state.client.clientEditPage.city,
});

const mapDispatchToProps = (dispatch) => ({
  changeInput: (value, fieldName) => {
    dispatch(changeEditInput(value, fieldName));
  },
  clodeModal: () => {
    dispatch(closeEditClientModal());
  },

  handleSubmit: (clientId) => {
    dispatch(submitEditClient(clientId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditClientModal);
