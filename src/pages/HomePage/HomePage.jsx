import React from 'react'
import './HomePage.css'
import {  Container, Button  } from 'react-bootstrap'
import myPhoto from '../../resources/images/IMG_9956.JPG'


const HomePage = () => {
    


    return (
        <>
        <div className='presentacion'>
        <h1> Hellow world</h1>
        <p> Hola mi nombre es Víctor,
        soy un diseñador y desarrollador web, residiendo en Madrid, España.</p>
        <img src={myPhoto} className='imgMyPhoto'/>
        </div>
        
        <div className="hero" />
        </>
    )
}

export default HomePage

