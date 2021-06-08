import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import { useParams } from 'react-router-dom';
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
const AddPaymentModal = ({ isOpen, closeModal, handleSubmit }) => {
  const clientId = useParams();
  const classes = useStyles();
  const handleClose = () => {
    closeModal();
  };
  const [selectedDate, handleDateChange] = useState(new Date());
  const [amount, changeAmount] = useState('');
  const handleChangeAmount = (event) => {
    changeAmount(event.target.value);
  };
  const handleAddPaymentSubmit = (event) => {
    event.preventDefault();
    handleSubmit(amount, selectedDate, clientId.id);
    changeAmount('');
    handleDateChange(new Date());
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
            <h3>Ajouter un paiemment</h3>
            <form onSubmit={handleAddPaymentSubmit}>
              <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    value={selectedDate}
                    onChange={handleDateChange}
                    id="date-picker-dialog"
                    label="Date de paiement"
                    format="dd/MM/yyyy"
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
                <TextField
                  id="standard-basic"
                  label="Montant €"
                  value={amount}
                  type="number"
                  onChange={handleChangeAmount}
                />
              </div>
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
