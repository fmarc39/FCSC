import { connect } from 'react-redux';
import Home from '../components/Home';
import { openAddClientModal } from '../actions/utils.js';
import {
  fetchClients,
  handleSearchInputChange,
  handleSubmitSearchClient,
} from '../actions/addClient.js';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isAuth: state.user.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
  handleOpenModal: () => {
    dispatch(openAddClientModal());
  },
  fetchClients: () => {
    dispatch(fetchClients());
  },
  handleChange: (value, fieldName) => {
    dispatch(handleSearchInputChange(value, fieldName));
  },
  handleSubmit: () => {
    dispatch(handleSubmitSearchClient());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
