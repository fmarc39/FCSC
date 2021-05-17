import { connect } from 'react-redux';
import Home from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/Home';
import { openAddClientModal } from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/utils.js';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  handleOpenModal: () => {
    dispatch(openAddClientModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
