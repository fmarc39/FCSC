import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
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
}));
const AddPaymentModal = ({ isOpen, closeModal, handlesubscription }) => {
  const classes = useStyles();
  const handleClose = () => {
    closeModal();
  };
  const clientId = useParams();

  const handleAddsubscription = (event) => {
    event.preventDefault();
    handlesubscription(selectValue, clientId.id);
  };

  const [selectValue, setSelectValue] = useState('Diamant');
  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
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
            <h3>Ajouter un abonnement</h3>
            <form onSubmit={handleAddsubscription}>
              <Select
                native
                onChange={handleSelectChange}
                defaultValue={selectValue}
                value={selectValue}
              >
                <option aria-label="None" value="" />
                <option value="Diamant">Diamant</option>
                <option value="Or">Or</option>
                <option value="Argent">Argent</option>
              </Select>
              <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
                onSubmit={handleAddsubscription}
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