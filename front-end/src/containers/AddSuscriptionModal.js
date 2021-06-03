import { connect } from 'react-redux';
import AddSuscriptionModal from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/AddSusciptionModal/index.js';
import { closeSuscriptionModal } from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/utils.js';
import { handlesubscription } from 'actions/Subscription.js';

const mapStateToProps = (state) => ({
  isOpen: state.utils.addSuscriptionModal,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => {
    dispatch(closeSuscriptionModal());
  },
  handlesubscription: (value, clientId) => {
    dispatch(handlesubscription(value, clientId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSuscriptionModal);
