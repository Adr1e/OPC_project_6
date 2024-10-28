import React from 'react';
import './Banner.scss';  
import bannerImage from '../ressources/Banner.jpeg';  

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Bannière" className="banner-image" />
      <div className="banner-text">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Banner;