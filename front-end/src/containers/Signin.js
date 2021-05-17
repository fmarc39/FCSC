import { connect } from 'react-redux';
import Signin from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/SignIn/index.js';
import {
  handleChange,
  handleSignin,
} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/user.js';

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (fieldValue, fieldName) => {
    dispatch(handleChange(fieldValue, fieldName));
  },
  handleSubmit: () => {
    dispatch(handleSignin());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
