import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/Header/index.js';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useParams } from 'react-router-dom';
import './styles.scss';
import Divider from '@material-ui/core/Divider';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddPaymentModal from '/Users/fmarc/Documents/Code/FCSC/front-end/src/containers/AddPaymentModal.js';
import AddCommentModal from '/Users/fmarc/Documents/Code/FCSC/front-end/src/containers/AddCommentModal.js';
import DeleteClientModal from '/Users/fmarc/Documents/Code/FCSC/front-end/src/containers/DeleteClientModal.js';
import EditIcon from '@material-ui/icons/Edit';
import EditClientModal from '/Users/fmarc/Documents/Code/FCSC/front-end/src/containers/EditClientModal.js';
import AddSucriptionModal from '/Users/fmarc/Documents/Code/FCSC/front-end/src/containers/AddSuscriptionModal.js';
import Tooltip from '@material-ui/core/Tooltip';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MapIcon from '@material-ui/icons/Map';
import ProfilLogo from './user.svg';
import ContractLogo from './contract.svg';
import CancelIcon from '@material-ui/icons/Cancel';
import plusBtn from './plus.png';
import AddPayment from './add.png';
import AddComment from './comment.png';
import Pdf from './pdf.svg';

const ClientPage = ({
  openPaymentModal,
  openAddCommentModal,
  fetchClientInfos,
  clientData,
  comments,
  deleteComment,
  openDeleteConfirmationModal,
  openEditClientModal,
  openAddSuscriptionModal,
  handleDeleteSusb,
  handleDeletePayment,
  debt,
  handleUpdateDebt,
}) => {
  const handleAddPaymentBtn = () => {
    openPaymentModal();
  };
  const handleAddCommentBtn = () => {
    openAddCommentModal();
  };
  const clientId = useParams();

  useEffect(() => {
    fetchClientInfos(clientId.id);
  }, []);

  const handleDeleteCommentBtn = (event) => {
    deleteComment(event.target.closest('button').name);
  };
  const handleDeleteClientBtn = () => {
    openDeleteConfirmationModal();
  };
  const handleEditBtn = () => {
    openEditClientModal();
  };
  const handleAddSusriptionBtn = () => {
    openAddSuscriptionModal();
  };
  const handleDeleteSusbBtn = () => {
    handleDeleteSusb(clientId.id);
  };

  const handleDeletePaymentBtn = (event) => {
    const newDebt =
      Number(debt) +
      Number(event.target.closest('button').getAttribute('data-value'));
    handleDeletePayment(event.target.closest('button').name);
    handleUpdateDebt(newDebt, clientId.id);
  };

  return (
    <div className="client">
      <Header />
      <div className="client-box">
        <div className="client-box__del-btn">
          <Tooltip title="supprimer le client" arrow>
            <IconButton
              onClick={handleDeleteClientBtn}
              style={{ color: 'white' }}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="client-box__back-btn">
          <Link to="/home">
            <IconButton style={{ color: 'white' }}>
              <ArrowBackIosIcon />
            </IconButton>
          </Link>
        </div>
        <h1 className="client-box__commercial-name">
          {clientData.commercial_name}
        </h1>

        <div className="content">
          <div className="content__left">
            <img
              src={ProfilLogo}
              alt="logo-profil"
              className="content__header-icon"
            />
            <h2 className="content__contact-name">
              {clientData.first_name} {clientData.last_name}
              <Tooltip title="modifier les informations du client" arrow>
                <IconButton
                  aria-label="delete"
                  onClick={handleEditBtn}
                  style={{ color: '#224059' }}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </h2>
            <Divider />
            <div className="content__box">
              <p className="content__title">Portable</p>
              <p className="content__content">
                <PhoneAndroidIcon
                  className="content__icon"
                  style={{ color: '#224059' }}
                />
                <a href="tel:">{clientData.cel_phone}</a>
              </p>
            </div>
            <Divider />
            <div>
              <p className="content__title">Fixe</p>
              <p className="content__content">
                <PhoneIcon
                  className="content__icon"
                  style={{ color: '#224059' }}
                />
                <a href="tel:">{clientData.fix_phone}</a>
              </p>
            </div>
            <Divider />
            <div>
              <p className="content__title">Email</p>
              <p className="content__content">
                <EmailIcon
                  className="content__icon"
                  style={{ color: '#224059' }}
                />
                <a href={'mailto:san@antonio.net'}>{clientData.email}</a>
              </p>
            </div>
            <Divider />
            <div>
              <p className="content__title">Adresse</p>

              <p className="content__content">
                <LocationOnIcon
                  className="content__icon"
                  style={{ color: '#224059' }}
                />{' '}
                {clientData.adress}
              </p>
            </div>
            <Divider />
            <div>
              <p className="content__title">Code Postal</p>

              <p className="content__content">
                {' '}
                <MapIcon
                  className="content__icon"
                  style={{ color: '#224059' }}
                />{' '}
                {clientData.zip_code}
              </p>
            </div>
            <Divider />
            <p className="content__title">Ville</p>

            <p className="content__content">
              {' '}
              <LocationCityIcon
                className="content__icon"
                style={{ color: '#224059' }}
              />
              {clientData.city}
            </p>
            <Divider />
          </div>
          <Divider orientation="vertical" flexItem />
          <div className="content__right">
            <div className="content__right-theme">
              <p className="content__title-right"> Type d'abonnement</p>

              {!clientData.subscription && (
                <div>
                  <Tooltip title="ajouter un contrat" arrow>
                    <button
                      onClick={handleAddSusriptionBtn}
                      className="content__right__add-sub-btn"
                    >
                      <img
                        src={plusBtn}
                        alt="add-sub-icon"
                        className="content__right__add-sub-img"
                      />
                    </button>
                  </Tooltip>
                  <p className="content__no-content">
                    Pas de contrat pour ce client
                  </p>
                </div>
              )}

              {clientData.subscription && (
                <div className="content__sub-box">
                  <img
                    src={ContractLogo}
                    alt="contract-logo"
                    className="content__sub-box__logo"
                  />
                  <p className="content__sub-box__contract-name">
                    Nom du contrat :{' '}
                    <span className="content__sub-box__contract">
                      {clientData.subscription}
                    </span>
                  </p>
                  <p className="content__sub-box__contract-name">
                    Prix du contrat :{' '}
                    <span className="content__sub-box__debt">
                      {clientData.sub_price} €
                    </span>
                  </p>
                  <IconButton aria-label="delete" onClick={handleDeleteSusbBtn}>
                    <DeleteForeverIcon style={{ color: '#224059' }} />
                  </IconButton>
                </div>
              )}
            </div>

            <div className="content__right-theme pay">
              <div className="content__header-box">
                <Tooltip title="Ajouter un paiement" arrow>
                  <button
                    onClick={handleAddPaymentBtn}
                    className="content__right__add-sub-btn"
                  >
                    <img
                      src={AddPayment}
                      alt="add-sub-icon"
                      className="content__right__add-sub-img"
                    />
                  </button>
                </Tooltip>
                <Tooltip title="Editer une facture" arrow>
                  <button
                    onClick={handleAddPaymentBtn}
                    className="content__right__add-invoice-btn"
                  >
                    <img
                      src={Pdf}
                      alt="add-sub-icon"
                      className="content__right__add-sub-img"
                    />
                  </button>
                </Tooltip>
                <p className="content__title-right">Facturation</p>
                {clientData.debt && (
                  <div className="content__right-debt">
                    <p>
                      Reste à payer:{' '}
                      <span className="content__content-debt">
                        {clientData.debt}{' '}
                      </span>{' '}
                      €
                    </p>
                  </div>
                )}
              </div>
              {!clientData.payments && <p>Pas de facture pour ce client</p>}
              {clientData.payments &&
                clientData.payments.map((payment) => {
                  return (
                    <div className="content__payment-box">
                      <div className="content__payment-box__delete-btn">
                        <Tooltip title="Supprimer un paiement" arrow>
                          <IconButton
                            aria-label="addPayment"
                            onClick={handleDeletePaymentBtn}
                            name={payment.id}
                            data-value={payment.amount}
                          >
                            <CancelIcon />
                          </IconButton>
                        </Tooltip>
                      </div>
                      <p className="content__payment-box__amount">
                        {payment.amount} €
                      </p>
                      <p>Payé le {payment.date}</p>
                    </div>
                  );
                })}
            </div>
            <div className="content__right-theme">
              <div className="content__header-box">
                <p className="content__title-right">Commentaires</p>
                <Tooltip title="ajouter un commentaire" arrow>
                  <button
                    onClick={handleAddCommentBtn}
                    className="content__right__add-sub-btn"
                  >
                    <img
                      src={AddComment}
                      alt="add-sub-icon"
                      className="content__right__add-sub-img"
                    />
                  </button>
                </Tooltip>
              </div>
              <div className="comment pay">
                {comments &&
                  comments.map((comment) => (
                    <div className="comment__box">
                      <p>{comment.comment}</p>
                      <div className="comment__box__delete-btn">
                        <Tooltip title="Supprimer un commentaire">
                          <IconButton
                            onClick={handleDeleteCommentBtn}
                            name={comment.id}
                          >
                            <CancelIcon />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddPaymentModal />
      <AddCommentModal />
      <AddSucriptionModal />
      <DeleteClientModal />
      <EditClientModal />
    </div>
  );
};

export default ClientPage;
