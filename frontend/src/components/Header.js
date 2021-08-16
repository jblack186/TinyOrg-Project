import React from "react";
import '../css/Header.scss';
import Logo from '../img/logo.png';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
        <img className="header__logo" src={Logo} alt="logo" />
    <Link style={{textDecoration: 'none', background: '#28a745', color:'white', padding: '8px', borderRadius: '8px'}} to='/compare'>Click here to see how we match up against other brands!</Link>
    </div>
  )
}

export default Header;