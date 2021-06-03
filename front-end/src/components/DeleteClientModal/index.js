// Import React
import React from 'react';
import PropTypes from 'prop-types';

// Import NPM

import { useParams } from 'react-router-dom';

// Import from MATERIAL_UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

// Fonction qui va permettre l'annimation de la modal à l'ouverture
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  btn: {
    background: '#008DBA',
    color: '#FFF',
    '&:hover': {
      background: '#0368A3',
      color: '#FFF',
    },
    borderRadius: '15px',
  },
});

const DialogChangeInformationsModal = ({
  isOpen,
  handleClose,
  DeleteClientBtn,
}) => {
  const clientId = useParams();
  const handleCloseBtn = () => {
    handleClose();
  };
  const handleSubmit = () => {
    DeleteClientBtn(clientId.id);
  };

  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseBtn}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <p className="head-title">Merci de confirmer ?</p>
        </DialogTitle>
        <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={handleSubmit}
            className={classes.btn}
            endIcon={<DeleteForeverIcon />}
          >
            Oui
          </Button>
          <Button
            onClick={handleCloseBtn}
            className={classes.btn}
            endIcon={<CancelIcon />}
          >
            Annuler
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

DialogChangeInformationsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.bool.isRequired,
  handleRedirect: PropTypes.func.isRequired,
};

export default DialogChangeInformationsModal;
