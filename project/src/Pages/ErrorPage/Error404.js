import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../composants/Header/Header';
import Footer from '../../composants/Footer/Footer';
import './Error404.scss';


function Error404() {
  return (
    <div className='error-container'>
    <Header />
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <nav className='error-nav'>
        <Link to="/">retourner sur la page d'accueil</Link>
      </nav>
    <Footer />
    </div>
  );
}

export default Error404;