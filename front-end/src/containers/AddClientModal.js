import { connect } from 'react-redux';
import AddClientModal from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/AddClientModal/index.js';
import { changeInput } from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/addClient.js';
import { closeAddClientModal } from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/utils';

const mapStateToProps = (state) => ({
  isOpen: state.utils.addClientModal,
});

const mapDispatchToProps = (dispatch) => ({
  changeInput: (value, fieldName) => {
    dispatch(changeInput(value, fieldName));
  },
  clodeModal: () => {
    dispatch(closeAddClientModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddClientModal);
