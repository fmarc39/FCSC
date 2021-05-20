import React from 'react';
import logo from 'components/Header/logo-fcsc.jpeg';
import { useHistory, Link } from 'react-router-dom';
import './styles.scss';

const Header = ({ handleLogout }) => {
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
        <button
          variant="contained"
          color="primary"
          className="header__login-btn"
          onClick={handleLogoutBtn}
        >
          Logout
        </button>
        <button
          variant="contained"
          color="primary"
          className="header__login-btn"
        >
          Admin
        </button>
      </div>
    </header>
  );
};

export default Header;
