import React from 'react';
import logo from './logo-fcsc.jpeg';
import Button from '@material-ui/core/Button';
import { useHistory, Link } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './styles.scss';

const Header = ({ handleLogout, isAuth }) => {
  const handleLogoutBtn = (event) => {
    event.preventDefault();
    handleLogout();
  };

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="club-logo" className="header__logo" />
      </Link>
      <h1 className="header__title">Gestion sponsors FCSC</h1>
      <div>
        {isAuth && (
          <Button
            variant="contained"
            onClick={handleLogoutBtn}
            color="primary"
            size="large"
            startIcon={<ExitToAppIcon />}
          >
            Se déconnecter
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
