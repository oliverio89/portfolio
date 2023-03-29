import React, { useState } from 'react'
import './HomePage.css'
import myPhoto from '../../resources/images/IMG_9956.JPG'
import es from '../../components/Language/es';
import en from '../../components/Language/en';
import espana from '../../resources/images/icons8-spain-48.png';
import inglaterra from '../../resources/images/icons8-united-kingdom-48.png';
import Contact from '../../components/Contact/contact'



const HomePage = () => {

    const [idioma, setIdioma] = useState('es')

    const cambiarIdioma = () => {
        setIdioma(idioma === 'es' ? 'en' : 'es')
      }

    return (
        <>
            <div className='presentacion'>
                <div className="titulo">
                <h1>{idioma === 'es' ? es.titulo : en.titulo}</h1>
                    <p> {idioma === 'es' ? es.descripción : en.descripción}</p>
                </div>
                <div class="bg-image hover-zoom">
                    <img src={myPhoto} className='imgMyPhoto bg-image hover-zoom' />
                </div>
            </div>
            <button onClick={cambiarIdioma}>
        <img className='iconLenguage'
          src={idioma === 'es' ? espana : inglaterra}
          alt={idioma === 'es' ? 'Español' : 'English'}
        />
      </button>

            <div className="hero" />

            {/* cuerpo */}
            <div className='cuerpo'>

            </div>
            <div> <Contact /> </div>

        </>
    )
}

export default HomePage

