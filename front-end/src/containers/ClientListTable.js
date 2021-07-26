import { connect } from 'react-redux';
import ClientListTable from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/ClientListTable/index.js';
import { fetchClients } from '/Users/fmarc/Documents/Code/FCSC/front-end/src/actions/addClient.js';
import { GetFilterList } from '../actions/utils';

const mapStateToProps = (state) => ({
  clientData: state.client.clientList,
});

const mapDispatchToProps = (dispatch) => ({
  handleCheckFilter: () => {
    dispatch(GetFilterList());
  },
  fetchClients: () => {
    dispatch(fetchClients());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientListTable);
