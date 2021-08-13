import React from "react";
import '../css/Header.scss';
import Logo from '../img/logo.png';

function Header() {
  return (
    <div className="header">
        <img className="header__logo" src={Logo} alt="logo" />
    </div>
  )
}

export default Header;