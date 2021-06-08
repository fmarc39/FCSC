import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '10px',
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    margin: '.5rem',
  },
}));
const AddClientModal = ({ changeInput, isOpen, clodeModal, handleSubmit }) => {
  const classes = useStyles();

  const handleCloseModal = () => {
    clodeModal();
  };

  const handleChangeInput = (event) => {
    changeInput(event.target.value, event.target.name);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
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
                  name="lastName"
                  onChange={handleChangeInput}
                />
                <TextField
                  id="outlined-basic"
                  required="true"
                  className={classes.input}
                  label="Prénom"
                  variant="outlined"
                  name="firstName"
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
                  name="commercialName"
                  onChange={handleChangeInput}
                />
                <TextField
                  id="outlined-basic"
                  className={classes.input}
                  label="Telephone fixe"
                  type="number"
                  variant="outlined"
                  name="fixPhone"
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
                  name="celPhone"
                  onChange={handleChangeInput}
                />
                <TextField
                  id="outlined-basic"
                  className={classes.input}
                  label="Email"
                  type="email"
                  variant="outlined"
                  name="email"
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
                  onChange={handleChangeInput}
                />
                <TextField
                  id="outlined-basic"
                  required="true"
                  className={classes.input}
                  label="Code postal"
                  variant="outlined"
                  name="zipCode"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="city-input">
                <TextField
                  id="outlined-basic"
                  required="true"
                  className={classes.input}
                  label="Ville"
                  variant="outlined"
                  name="city"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="save-btn">
                <Button
                  variant="contained"
                  required="true"
                  color="primary"
                  size="large"
                  type="submit"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                  onChange={handleChangeInput}
                >
                  Enregistrer
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddClientModal;
