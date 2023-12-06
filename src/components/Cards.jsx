import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destination</h1>
        <div className='cards__container'>
              <ul className="cards__items">
                <CardItem
                src='images/img-6.jpg'
                text='Explore the hidden waterfall deep inside the amazon jungle'
                label='Adventure'
                path='/services'
                /> 

                <CardItem
                src='images/img-8.jpg'
                text='Explore the hidden waterfall deep inside the amazon jungle'
                label='IAI'
                path='/services'
                />  
              </ul>

              <ul className="cards__items">
                <CardItem
                src='images/img-1.jpg'
                text='Explore the hidden waterfall deep inside the amazon jungle'
                label='Adventure'
                path='/services'
                /> 

                <CardItem
                src='images/img-2.jpg'
                text='iai chantier le lieur de mes mieuleur rencontre'
                label='IAI'
                path='/services'
                />  

                <CardItem
                src='images/img-2.jpg'
                text='iai chantier le lieur de mes mieuleur rencontre'
                label='IAI'
                path='/services'
                />  

                <CardItem
                src='images/img-2.jpg'
                text='iai chantier le lieur de mes mieuleur rencontre'
                label='IAI'
                path='/services'
                />  

                <CardItem
                src='images/img-4.jpg'
                text='iai chantier le lieur de mes mieuleur rencontre'
                label='IAI'
                path='/services'
                />  
              </ul>
        </div>
    </div>
  )
}

export default Cards