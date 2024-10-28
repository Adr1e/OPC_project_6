import React from 'react';
import './AboutBanner.scss';  // Assure-toi que le fichier Sass est bien lié
import bannerImage from '../ressources/AboutBanner.jpeg';  // Import de l'image depuis le dossier ressources

function AboutBanner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Bannière" className="banner-image" />
    </div>
    
  );
}

export default AboutBanner;