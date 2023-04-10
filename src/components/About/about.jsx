import React from 'react';
import './about.css'
import myPhoto from '../../resources/images/IMG_9956.JPG'
import Tilt from 'react-parallax-tilt';


function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola, soy Victor
            <br className="hidden lg:inline-block" />Me encanta construir aplicaciones web.
          </h1>
          <p className="mb-8 leading-relaxed">
            Soy un desarrollador web junior con pasión por la creación de sitios web dinámicos y atractivos. Con un fuerte conocimiento en lenguajes de programación como HTML, CSS y JavaScript, me enorgullece crear soluciones eficaces para problemas complejos y ayudar a las empresas a tener presencia en línea. Además, tengo experiencia trabajando en equipo y colaborando en proyectos multidisciplinarios, lo que me ha permitido desarrollar habilidades de comunicación efectiva y trabajo en equipo. Estoy emocionado de seguir aprendiendo y creciendo como desarrollador, y espero poder aplicar mis habilidades y conocimientos para ayudar a las empresas a alcanzar sus objetivos en línea.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Trabaja conmigo
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Mira mis trabajos anteriores
            </a>
          </div>
        </div>
        <Tilt>
          <div class="bg-image hover-zoom">
            <img src={myPhoto} className='imgMyPhoto bg-image hover-zoom' alt='myPhoto' />
          </div>
        </Tilt>
      </div>
    </section>
  );
}




export default About