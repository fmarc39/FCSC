import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import './styles.scss';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    margin: '.5rem',
  },
}));
const EditClientModal = ({
  changeInput,
  isOpen,
  clodeModal,
  handleSubmit,
  first_name,
  last_name,
  commercial_name,
  fix_phone,
  cel_phone,
  email,
  adress,
  zip_code,
  city,
}) => {
  const classes = useStyles();

  const handleCloseModal = () => {
    clodeModal();
  };
  const clientId = useParams();

  const handleChangeInput = (event) => {
    changeInput(event.target.value, event.target.name);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(clientId.id);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
            <form onSubmit={handleFormSubmit}>
              <div>
                <TextField
                  id="outlined-basic"
                  required="true"
                  className={classes.input}
                  label="Nom"
                  variant="outlined"
                  name="first_name"
                  value={first_name}
                  onChange={handleChangeInput}
                />
                <TextField
                  id="outlined-basic"
                  required="true"
                  className={classes.input}
                  label="Prénom"
                  variant="outlined"
                  name="last_name"
                  value={last_name}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  required="true"
                  className={classes.input}
                  label="Noms commerciaux"
                  variant="outlined"
                  name="commercial_name"
                  value={commercial_name}
                  onChange={handleChangeInput}
                />
                <TextField
                  id="outlined-basic"
                  className={classes.input}
                  label="Telephone fixe"
                  type="number"
                  variant="outlined"
                  name="fix_phone"
                  value={fix_phone}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  required="true"
                  className={classes.input}
                  label="Telephone portable"
                  variant="outlined"
                  type="number"
                  name="cel_phone"
                  value={cel_phone}
                  onChange={handleChangeInput}
                />
                <TextField
                  id="outlined-basic"
                  className={classes.input}
                  label="Email"
                  type="email"
                  variant="outlined"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  required="true"
                  className={classes.input}
                  label="Adresse"
                  variant="outlined"
                  name="adress"
                  value={adress}
                  onChange={handleChangeInput}
                />
                <TextField
                  id="outlined-basic"
                  required="true"
                  className={classes.input}
                  label="Code postal"
                  variant="outlined"
                  name="zip_code"
                  value={zip_code}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  required="true"
                  className={classes.input}
                  label="Ville"
                  variant="outlined"
                  name="city"
                  value={city}
                  onChange={handleChangeInput}
                />
              </div>
              <Button
                variant="contained"
                required="true"
                color="primary"
                size="large"
                type="submit"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={handleFormSubmit}
              >
                Valider
              </Button>
              <Button
                variant="contained"
                required="true"
                color="primary"
                size="large"
                type="submit"
                className={classes.button}
                startIcon={<CancelIcon />}
                onClick={handleCloseModal}
              >
                Annuler
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditClientModal;
