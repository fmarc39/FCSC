import { connect } from 'react-redux';
import Invoice from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/InvoicePage/index';
import {} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/addClient.js';
import {} from '../actions/utils';

const mapStateToProps = (state) => ({
  invoiceData: state.client.invoiceInfos,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);
