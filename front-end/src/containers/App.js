import { connect } from 'react-redux';
import App from '/Users/fmarc/Documents/Code/FCSC/front-end/src/App.js';

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
