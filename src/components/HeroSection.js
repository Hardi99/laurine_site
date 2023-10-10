import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
       {/* <video src="/videos/video-2.mp4" autoPlay loop muted/> */}
        <h1>RDB A VOTRE SERVICE</h1>
        <p>Qu'attendez-vous</p>
        <div className='hero-btns'>
            <Button
            className = 'btn'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                SIGN UP
            </Button>

            <Button
            className = 'btn'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
               SIGN IN <i className='far fa-play-circle'/> 
            </Button>
            
        </div>
      
    </div>
  )
}
export default HeroSection;