import React from 'react'
import './HomePage.css'
import myPhoto from '../../resources/images/IMG_9956.JPG'


const HomePage = () => {



    return (
        <>
            <div className='presentacion'>
                <div className="titulo">
                    <h1> My name is Víctor</h1>
                    <p> Soy un desarrollador web junior con pasión por la creación de sitios web dinámicos y atractivos.<br></br> Con un fuerte conocimiento en lenguajes de programación como HTML, CSS y JavaScript, <br></br>me enorgullece crear soluciones eficaces para problemas complejos y ayudar a las empresas a tener presencia en línea.<br></br>Además, tengo experiencia trabajando en equipo y colaborando en proyectos multidisciplinarios, lo que me ha permitido desarrollar habilidades de comunicación efectiva y trabajo en equipo.<br></br>Estoy emocionado de seguir aprendiendo y creciendo como desarrollador, y espero poder aplicar mis habilidades y conocimientos para ayudar a las empresas a alcanzar sus objetivos en línea.</p>
                </div>
                <div className='photo'>
                    <img src={myPhoto} className='imgMyPhoto' />
                </div>
            </div>

            <div className="hero" />

            {/* cuerpo */}
            <div className='cuerpo'>

            </div>

        </>
    )
}

export default HomePage

