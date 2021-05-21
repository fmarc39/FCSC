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
}));
const AddPaymentModal = ({
  isOpen,
  closeModal,
  handleSubmit,
  changeInput,
  value,
}) => {
  const classes = useStyles();
  const handleClose = () => {
    closeModal();
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();
    handleSubmit();
  };
  const handleChangeInput = (event) => {
    changeInput(event.target.value);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
            <h3>Ajouter un commentaire</h3>
            <form onSubmit={handleSubmitForm}>
              <TextField
                id="standard-basic"
                label="Standard"
                value={value}
                onChange={handleChangeInput}
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                Sauvgarder
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddPaymentModal;
