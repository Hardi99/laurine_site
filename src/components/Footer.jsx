import React from 'react'
import { Button } from './Button'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
           <p className="footer-subscription-heading">
            Pour votre maision de rêve n'hésitez a nous contactez
            </p>
            <p className="footer-subscription-text">
                Vous pouvez vous enregistrez a tout moment
            </p> 
            <div className="input-areas">
                <form>
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Votre E-mail" 
                    className="footer-input"
                    />
                    <Button buttonStyle='btn--outline'>S'inscrire</Button>
                </form>
             </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items"> 
                    <h2>A propos</h2>
                    <Link to='/sign-up'> connection</Link>
                    <Link to='/services'>Nos offres</Link>
                    <Link to='/services'>Nos service</Link>
                    <Link to='/'>Investisseurs</Link>
                    <Link to='/'></Link>
                </div>
                <div className="footer-link-items"> 
                    <h2>Contacts</h2>
                    <Link to='/sign-up'> Nos activitez</Link>
                    <Link to='/'>Nos offres</Link>
                    <Link to='/'>Nos services</Link>
                    <Link to='/'>Investisseurs</Link>
                    
                </div>
                
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items"> 
                    <h2>Services</h2>
                    <Link to='/sign-up'> Construction</Link>
                    <Link to='/'>Etude du site</Link>
                    <Link to='/'>Plan & devis</Link>
                    <Link to='/'>Elevation</Link>
                    <Link to='/'>Finition et habillage</Link>
                </div>
                <div className="footer-link-items"> 
                    <h2>Autres</h2>
                    <Link to='/sign-up'> Vente des terrain & maison</Link>
                    <Link to='/'>Location des maison</Link>
                    <Link to='/'>location des appartements meublé</Link>
                    <Link to='/'>vente des services</Link>
                </div>
                
            </div>

        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to="/" className="social-logo">
                    RDB <i className="fab fa-typo3"></i>
                    </Link>
                </div>
                <small className='website-rights'> RBD @ 2023</small>
                <div className="social-icons">
                    <Link 
                    className="social-icon-link facebook"
                    to='/'
                    target='_blank'
                    aria-label='Facebook'>
                        <i className='fab fa-facebook-f'/>
                    </Link>

                    <Link 
                    className="social-icon-link instagram"
                    to='/'
                    target='_blank'
                    aria-label='Instagram'>
                        <i className='fab fa-instagram'/>
                    </Link>

                    <Link 
                    className="social-icon-link youtube"
                    to='/'
                    target='_blank'
                    aria-label='Youtube'>
                        <i className='fab fa-youtube'/>
                    </Link>
                    <Link 
                    className="social-icon-link twitter"
                    to='/'
                    target='_blank'
                    aria-label='Twitter'>
                        <i className='fab fa-twitter'/>
                    </Link>
                    <Link 
                    className="social-icon-link linkedin"
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'>
                        <i className='fab fa-linkedin'/>
                    </Link>

                    <Link 
                    className="social-icon-link tiktok"
                    to='/'
                    target='_blank'
                    aria-label='Tiktok'>
                        <i className='fab fa-tiktok'/>
                    </Link>
                </div>
            </div>
        </section>
      
    </div>
  );
}

export default Footer
