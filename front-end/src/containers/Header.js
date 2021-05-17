import { connect } from 'react-redux';
import Header from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/Header/index.js';
import { logout } from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/user.js';

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
