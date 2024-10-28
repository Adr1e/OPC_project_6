import React from 'react';
import { Link } from 'react-router-dom';  // Importer Link pour la navigation
import './Gallery.scss';
import appartementsData from '../ressources/appartements.json';

function Gallery() {
  return (
    <div className="Panel">
      <div className='Panel-item'>
        {appartementsData.map((appartement) => (
          <Link to={`/appartement/${appartement.id}`} key={appartement.id} className="Panel-item">
          <div className="Image-container"> {/* Nouveau conteneur pour l'image et le dégradé */}
              <img src={appartement.cover} alt={appartement.title} className="Panel-image" />
              <div className="Gradient-overlay"></div> {/* Dégradé appliqué ici */}
          </div>
          <h3>{appartement.title}</h3>
      </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
