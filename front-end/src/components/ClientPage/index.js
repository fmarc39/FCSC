import React from 'react';
import Header from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/Header/index.js';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './styles.scss';
import Divider from '@material-ui/core/Divider';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ChatIcon from '@material-ui/icons/Chat';
import AddPaymentModal from '/Users/fmarc/Documents/Code/FCSC/front-end/src/containers/AddPaymentModal.js';
import AddCommentModal from '/Users/fmarc/Documents/Code/FCSC/front-end/src/containers/AddCommentModal.js';

const index = ({ openPaymentModal, openAddCommentModal }) => {
  const handleAddPaymentBtn = () => {
    openPaymentModal();
  };
  const handleAddCommentBtn = () => {
    openAddCommentModal();
  };
  return (
    <div className="client">
      <Header />
      <div className="client-box">
        <div className="client-box__del-btn">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
        <div className="client-box__back-btn">
          <IconButton>
            <ArrowBackIosIcon />
          </IconButton>
        </div>
        <h1 className="client-box__commercial-name">Portigliati</h1>

        <div className="content">
          <div className="content__left">
            <h2 className="content__contact-name">Paul Picard</h2>
            <Divider />
            <div className="content__box">
              <p className="content__title">Portable</p>
              <p>
                <a href="tel:">06.35.11.60.59</a>
              </p>
            </div>
            <Divider />
            <div>
              <p className="content__title">Fixe</p>
              <p>
                <a href="tel:">06.35.11.60.59</a>
              </p>
            </div>
            <Divider />
            <div>
              <p className="content__title">Email</p>
              <p>
                <a href={'mailto:san@antonio.net'}>niqueTaMère@gmail.lapute</a>
              </p>
            </div>
            <Divider />
            <div>
              <p className="content__title">Adresse</p>
              <p>10 rue du pré</p>
            </div>
            <Divider />
            <div>
              <p className="content__title">Code Postal</p>
              <p>39200</p>
            </div>
            <Divider />
            <p className="content__title">Ville</p>
            <p>Saint Claude</p>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className="content__right">
            <p className="content__title-right">Type d'abonnement</p>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>Diamant</MenuItem>
              <MenuItem value={20}>Ruby</MenuItem>
              <MenuItem value={30}>Emeraude</MenuItem>
            </Select>
            <p className="content__title-right">Facturation</p>
            <IconButton aria-label="addPayment" onClick={handleAddPaymentBtn}>
              <CreditCardIcon />
            </IconButton>
            <p className="content__title-right">Commentaires</p>
            <IconButton aria-label="addPayment" onClick={handleAddCommentBtn}>
              <ChatIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <AddPaymentModal />
      <AddCommentModal />
    </div>
  );
};

export default index;
