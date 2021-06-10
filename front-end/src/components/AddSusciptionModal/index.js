import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { useParams } from 'react-router-dom';
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
    borderRadius: '10px',
    padding: theme.spacing(2, 2, 2),
  },
}));
const AddPaymentModal = ({ isOpen, closeModal, handlesubscription }) => {
  const classes = useStyles();
  const handleClose = () => {
    closeModal();
  };
  const clientId = useParams();

  const handleAddsubscription = (event) => {
    event.preventDefault();
    handlesubscription(selectValue, amount, clientId.id);
  };

  const [selectValue, setSelectValue] = useState('Diamant');
  const [amount, selectAmount] = useState('');
  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };
  const handleAmountChange = (event) => {
    selectAmount(event.target.value);
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
            <h3 className="modal-title">Ajouter un abonnement</h3>
            <form onSubmit={handleAddsubscription} className="sub-form-box">
              <div className="sub-form-box__select">
                <Select
                  native
                  onChange={handleSelectChange}
                  defaultValue={selectValue}
                  value={selectValue}
                  required="true"
                >
                  <option value="Diamant">Diamant</option>
                  <option value="Or">Or</option>
                  <option value="Argent">Argent</option>
                </Select>
              </div>
              <div className="sub-form-box__amount">
                <TextField
                  id="standard-basic"
                  label="Montant total €"
                  type="number"
                  value={amount}
                  onChange={handleAmountChange}
                  required="true"
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
                onSubmit={handleAddsubscription}
                className={classes.button}
                onChange={handleAmountChange}
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
