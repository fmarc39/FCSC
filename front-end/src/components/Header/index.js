import React from 'react';
import logo from 'components/Header/logo-fcsc.jpeg';
import './styles.scss';

const Header = ({ isAtuh, handleLogout }) => {
  const handleLogoutBtn = (event) => {
    event.preventDefault();
    handleLogout();
  };
  return (
    <header className="header">
      <img src={logo} alt="club-logo" className="header__logo" />
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
