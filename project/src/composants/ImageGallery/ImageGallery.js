import React, { useState } from 'react';
import './ImageGallery.scss';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'; // Importation des icônes

function ImageGallery({ pictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour revenir à l'image précédente
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-gallery">
      <img 
        src={pictures[currentImageIndex]} 
        alt={`Image ${currentImageIndex + 1}`} 
        className="gallery-image" 
      />

      {/* Affiche les flèches de navigation seulement si plus d'une image */}
      {pictures.length > 1 && (
        <>
          <button 
            className="prev-button" 
            onClick={prevImage}
            aria-label="Image précédente"
          >
            <FontAwesomeIcon icon={faChevronLeft} /> 
          </button>
          <button 
            className="next-button" 
            onClick={nextImage}
            aria-label="Image suivante"
          >
            <FontAwesomeIcon icon={faChevronRight} /> 
          </button>
        </>
      )}
      
      {/* Affiche la pagination seulement si plus d'une image */}
      {pictures.length > 1 && (
        <div className="pagination">
          {currentImageIndex + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
}

export default ImageGallery;