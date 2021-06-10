import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
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
  const clientId = useParams();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    handleSubmit(clientId.id);
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
            <h3 className="modal-title">Ajouter un commentaire</h3>
            <form onSubmit={handleSubmitForm} className="comment-form__box">
              <div className="comment-form__box__text-field">
                <TextField
                  label="votre commentaire"
                  fullWidth="true"
                  multiline="true"
                  value={value}
                  onChange={handleChangeInput}
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
