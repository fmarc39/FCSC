import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Invoice from './bill.png';
import Button from '@material-ui/core/Button';
import './styles.scss';
import InvoiceComponent from '../AddInvoiceModal/index';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: '10px',
    padding: theme.spacing(2, 4, 3),
  },
  input: {
    margin: '5px',
  },
  button: {
    margin: '15px',
  },
}));
const AddInvoiceModal = ({
  isOpen,
  closeModal,
  clientDataInvoice,
  invoiceCreate,
  handleInvoiceChange,
  handleInvoiceChangeItems,
}) => {
  console.log(clientDataInvoice);
  const classes = useStyles();
  const url = '/invoice';
  const history = useHistory();

  const handleClose = () => {
    closeModal();
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
  };
  const handleChangeInput = (event) => {
    let fieldName = event.target.name;
    let value = event.target.value;
    handleInvoiceChange(fieldName, value);
  };

  const handleChangeInputItems = (event) => {
    let fieldName = event.target.name;
    let value = event.target.value;
    handleInvoiceChangeItems(fieldName, value);
  };

  const handleInvoiceCreate = () => {
    invoiceCreate(clientDataInvoice);
    history.push(url);
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
            <form onSubmit={handleSubmitForm}>
              <div>
                <TextField
                  id="outlined-basic"
                  required="true"
                  className={classes.input}
                  value={clientDataInvoice.commercialName}
                  label="Noms commerciaux"
                  variant="outlined"
                  name="commercialName"
                  onChange={handleChangeInput}
                />
                <TextField
                  id="outlined-basic"
                  required="true"
                  className={classes.input}
                  value={clientDataInvoice.adress}
                  label="Adresse"
                  variant="outlined"
                  name="adress"
                  onChange={handleChangeInput}
                />
              </div>

              <div>
                <TextField
                  id="outlined-basic"
                  required="true"
                  className={classes.input}
                  value={clientDataInvoice.zipCode}
                  label="Code postal"
                  variant="outlined"
                  name="zipCode"
                  onChange={handleChangeInput}
                />
                <TextField
                  id="outlined-basic"
                  required="true"
                  className={classes.input}
                  value={clientDataInvoice.city}
                  label="Ville"
                  variant="outlined"
                  name="city"
                  onChange={handleChangeInput}
                />
              </div>

              <div>
                <TextField
                  id="outlined-basic"
                  required="true"
                  className={classes.input}
                  label="Dégisnation"
                  variant="outlined"
                  name="designation"
                  onChange={handleChangeInputItems}
                />
                <TextField
                  id="outlined-basic"
                  required="true"
                  className={classes.input}
                  label="Quantité"
                  variant="outlined"
                  name="quantity"
                  onChange={handleChangeInputItems}
                />
              </div>

              <div className="city-input">
                <TextField
                  id="outlined-basic"
                  required="true"
                  className={classes.input}
                  label="Montant €"
                  variant="outlined"
                  name="amount"
                  onChange={handleChangeInputItems}
                />
                <TextField
                  id="outlined-basic"
                  required="true"
                  className={classes.input}
                  label="Référence"
                  variant="outlined"
                  name="ref"
                  onChange={handleChangeInputItems}
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
                  onClick={handleInvoiceCreate}
                >
                  Valider
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddInvoiceModal;
