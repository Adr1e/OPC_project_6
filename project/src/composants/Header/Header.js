import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../ressources/Logo.png';

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo" className="logo-image" />  
      </div>
      <nav>
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? "active-link" : "")} 
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/About" 
              className={({ isActive }) => (isActive ? "active-link" : "")} 
            >
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;