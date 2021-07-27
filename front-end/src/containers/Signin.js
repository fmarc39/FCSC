import { connect } from 'react-redux';
import Signin from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/SignIn/index.js';
import {
  handleChange,
  handleSignin,
} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/user.js';
import { closeSnack } from '../actions/utils';

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
  isSnackMailOpen: state.utils.snackMail,
  isSnackPwdOpen: state.utils.snackPwd,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (fieldValue, fieldName) => {
    dispatch(handleChange(fieldValue, fieldName));
  },
  handleSubmit: () => {
    dispatch(handleSignin());
  },
  handleCloseSanck: () => {
    dispatch(closeSnack());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
