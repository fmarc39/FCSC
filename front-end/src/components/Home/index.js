import React from 'react';
import Header from '/Users/fmarc/Documents/Code/FCSC/front-end/src/containers/Header.js';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AddClientModal from '/Users/fmarc/Documents/Code/FCSC/front-end/src/containers/AddClientModal.js';
import ClientListTable from '/Users/fmarc/Documents/Code/FCSC/front-end/src/containers/ClientListTable.js';

const Home = ({ handleOpenModal }) => {
  const handleChange = () => {
    console.log('ok');
  };
  const handleOpenModalBtn = () => {
    console.log('ok');
    handleOpenModal();
  };
  return (
    <div>
      <Header />
      <div>
        <Fab color="primary" aria-label="add" onClick={handleOpenModalBtn}>
          <AddIcon />
        </Fab>
        <form>
          <TextField id="standard-basic" label="Standard" />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleChange}
          >
            <MenuItem value={10}>Nom</MenuItem>
            <MenuItem value={20}>Tel</MenuItem>
            <MenuItem value={30}>Gerant</MenuItem>
          </Select>
          <IconButton aria-label="delete">
            <DoneIcon />
          </IconButton>
        </form>
      </div>
      <ClientListTable />
      <AddClientModal />
    </div>
  );
};

export default Home;
