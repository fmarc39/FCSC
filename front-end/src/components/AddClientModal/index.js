import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

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
                  label="Nom"
                  variant="outlined"
                  name="firstName"
                  onChange={handleChangeInput}
                />
                <TextField
                  id="outlined-basic"
                  label="Prénom"
                  variant="outlined"
                  name="lastName"
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Noms commerciaux"
                  variant="outlined"
                  name="commercialName"
                  onChange={handleChangeInput}
                />
                <TextField
                  id="outlined-basic"
                  label="Telephone fixe"
                  variant="outlined"
                  name="fixPhone"
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Telephone portable"
                  variant="outlined"
                  name="celPhone"
                  onChange={handleChangeInput}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="email"
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Adresse"
                  variant="outlined"
                  name="adress"
                  onChange={handleChangeInput}
                />
                <TextField
                  id="outlined-basic"
                  label="Code postal"
                  variant="outlined"
                  name="zipCode"
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Ville"
                  variant="outlined"
                  name="city"
                  onChange={handleChangeInput}
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                className={classes.button}
                startIcon={<SaveIcon />}
                onChange={handleChangeInput}
              >
                Save
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddClientModal;
