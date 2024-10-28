import React from 'react';
import { useParams } from 'react-router-dom';
import appartementsData from '../../composants/ressources/appartements.json';  
import Header from '../../composants/Header/Header';
import Footer from '../../composants/Footer/Footer';
import Accordion from '../../composants/Accordion/Accordion'; 
import ImageGallery from '../../composants/ImageGallery/ImageGallery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Appartement.scss';

function Appartement() {
  const { id } = useParams();  // Récupérer l'ID depuis l'URL
  const rating = Number(appartementsData.rating);
  const appartement = appartementsData.find(appart => appart.id === id);

  // Gestion des erreurs si l'appartement n'est pas trouvé
  if (!appartement) {
      return <div>Aucun appartement trouvé.</div>;
  }

  return (
    <div className='appartement-container'>
      <Header />
      {/* Intégration de la galerie d'images  */}
      <ImageGallery pictures={appartement.pictures} />

      {/* Informations principales de l'appartement */}
      <div className="appartement-info">
        <div className="appartement-header">
          <h1>{appartement.title}</h1>
          <h2>{appartement.location}</h2>

          <div className="tags">
            {appartement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Informations sur l'hôte */}
        <div className="host-info">
          <div className="host-name">
            <p>{appartement.host.name}</p>
            <img src={appartement.host.picture} alt={appartement.host.name} className="host-picture" />
          </div>
          {/* Étoiles pour la note avec Font Awesome */}
          <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
                <i 
                  key={index} 
                  className={index < Number(appartement.rating) ? 'fa-solid fa-star filled' : 'fa-regular fa-star'}></i>
            ))}
          </div>
        </div>
      </div>

      {/* Utilisation des composants Accordion */}
      <div className="appartement-details">
        <Accordion title="Description" content={appartement.description} />
        <Accordion
          title="Équipements"
          content={
            <ul className="equipments-list">
              {appartement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>

      <Footer />
    </div>
  );
}

export default Appartement;