import React, { useState } from 'react'
import './HomePage.css'
import myPhoto from '../../resources/images/IMG_9956.JPG'
import es from '../../components/Language/es';
import en from '../../components/Language/en';
import espana from '../../resources/images/icons8-spain-48.png';
import inglaterra from '../../resources/images/icons8-united-kingdom-48.png';



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
                    <p> Soy un desarrollador web junior con pasión por la creación de sitios web dinámicos y atractivos.<br></br> 
                    Con un fuerte conocimiento en lenguajes de programación como HTML, CSS y JavaScript, <br></br>
                    me enorgullece crear soluciones eficaces para problemas complejos y ayudar a las empresas a tener presencia en línea.<br></br> 
                    Además, tengo experiencia trabajando en equipo y colaborando en proyectos multidisciplinarios, lo que me ha permitido desarrollar <br></br>
                    habilidades de comunicación efectiva y trabajo en equipo.<br></br>
                    Estoy emocionado de seguir aprendiendo y creciendo como desarrollador, y espero poder aplicar mis habilidades y conocimientos para ayudar <br></br>
                    a las empresas a alcanzar sus objetivos en línea.</p>
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

        </>
    )
}

export default HomePage

