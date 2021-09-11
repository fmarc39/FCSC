import React, { useEffect } from 'react';
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
import './styles.scss';

const Home = ({
  handleOpenModal,
  fetchClients,
  handleChange,
  handleSubmit,
  isAuth,
}) => {
  const handleChangeInput = (event) => {
    handleChange(event.target.value, event.target.name);
  };
  const handleOpenModalBtn = () => {
    handleOpenModal();
  };
  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  };
  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div>
      <Header />
      <div className="add-client">
        <div className="add-client__add-btn">
          <Fab color="primary" aria-label="add" onClick={handleOpenModalBtn}>
            <AddIcon />
          </Fab>
        </div>
        <form className="add-client__form" onSubmit={handleSearchFormSubmit}>
          <TextField
            onChange={handleChangeInput}
            name="searchInput"
            label="Votre recherche"
          />
          <Select
            label="type"
            id="demo-simple-select"
            name="searchSelect"
            onChange={handleChangeInput}
            defaultValue="commercial_name"
          >
            <MenuItem value="commercial_name">Entreprise</MenuItem>
            <MenuItem value="cel_phone">Portable</MenuItem>
            <MenuItem value="last_name">Nom de famille</MenuItem>
            <MenuItem value="subscription">Contrat</MenuItem>
          </Select>
          <IconButton type="submit">
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
