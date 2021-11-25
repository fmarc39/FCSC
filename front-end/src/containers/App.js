import { connect } from 'react-redux';
import App from '/Users/fmarc/Documents/Code/FCSC/front-end/src/App.js';

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
  invoiceData: state.client.invoiceInfos,
  invoiceItems: state.client.items,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
