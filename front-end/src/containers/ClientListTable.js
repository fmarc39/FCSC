import { connect } from 'react-redux';
import ClientListTable from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/ClientListTable/index.js';
import {} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/addClient.js';
import {} from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/utils';

const mapStateToProps = (state) => ({
  clientData: state.client.clientList,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ClientListTable);
