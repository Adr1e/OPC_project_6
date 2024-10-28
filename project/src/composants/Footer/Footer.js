import React from 'react';
import './Footer.scss';
import logo from '../ressources/Logo.png';  

function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={logo} alt="Logo Kasa" className="footer-logo" />  
      </div>
      <div className='footer-text'>
        <p>© 2020 Kasa. All rights reserved</p>  
      </div>
    </footer>
  );
}

export default Footer;