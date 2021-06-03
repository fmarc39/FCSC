import { connect } from 'react-redux';
import DeleteClientModal from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/DeleteClientModal/index.js';
import {
  closeDeleteModal,
  deleteClient,
} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/utils.js';

const mapStateToProps = (state) => ({
  isOpen: state.utils.deleteClientModal,
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(closeDeleteModal());
  },
  DeleteClientBtn: (clientId) => {
    dispatch(deleteClient(clientId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteClientModal);
