import React from 'react'
import '../../App.css';
import './Contacts.css';
import Footer from '../Footer';

export default function Contact() {
    return (
      <div>
        <h1 className='products'>CONTACT</h1>
        <div className="contacts-container">
          <h2>Nous Contacter</h2>
          <div className='contact-bloc'>
            <div className="contact-info">
              <div className="contact-details">
                <h2>Nos Coordonnées</h2>
                <p>Téléphone : 123-456-7890</p>
                <p>Email : contact@example.com</p>
                <p>Adresse : 123 Rue du BTP, Ville</p>
              </div>

              <div className="partner-info">
                <h2>Notre Partenaire</h2>
                <div className="partner-profile">
                  <img src="chemin/vers/photo-partenaire.jpg" alt="Partenaire" />
                  <div className="partner-text">
                    <p>Nom du Partenaire</p>
                    <p>Description du Partenaire</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-us" style={{margin: '0 auto', width: '60%', textAlign: 'center'}}>
              <h2>À Propos de Nous</h2>
              <div className="about-text">
                <p>Présentation de nous et de notre expertise dans le BTP.</p>
                <p>Plus d'informations sur nos services et réalisations.</p>
              </div>
              <div className="profile-images">
                <div className="profile">
                  <img src="images/img-1.jpg" alt="Vous" />
                  <p>NDEME Hermann</p>
                </div>
                <div className="profile">
                  <img src="images/img-1.jpg" alt="Partenaire" />
                  <p>NDEME Hermann</p>
                </div>
              </div>
            </div>            
          </div>
        </div>
        <Footer/>
      </div>
    )
}

