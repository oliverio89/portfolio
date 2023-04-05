import './navbar.css'

import { Nav, Container, Navbar } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import logo from '../../resources/images/OliDeVgrey.png'

import React, { useState } from 'react'

import es from '../../components/Language/es';
import en from '../../components/Language/en';
import espana from '../../resources/images/icons8-spain-48.png';
import inglaterra from '../../resources/images/icons8-united-kingdom-48.png';



function Navbarr() {

  const [idioma, setIdioma] = useState('es')

  const cambiarIdioma = () => {
      setIdioma(idioma === 'es' ? 'en' : 'es')
    }

      return (
        
        <Navbar class='Navigation' collapseOnSelect expand="lg" >
        
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">  
               
    <Navbar.Brand>
      <a href="/"><img src={logo} className='imgLogo' alt='imgLogo'/></a>
    </Navbar.Brand>

            <Container className='circle'>
          <div>
                <Link to="/">
                    <Nav.Link as="div" variant="btnStart" size="sm"> {idioma === 'es' ? es.AcercaDeMí : en.AcercaDeMí}</Nav.Link>
                </Link>
                </div>
                <div>
                <Link to="/">
                    <Nav.Link as="div" variant="btnStart" size="sm"> {idioma === 'es' ? es.Habilidades : en.Habilidades}</Nav.Link>
                    </Link>
                    </div>
                    <div>
                    <Link to="#Proyects">
                    <Nav.Link as="div" variant="btnStart" size="sm"> {idioma === 'es' ? es.Proyectos : en.Proyectos}</Nav.Link>
                    </Link>
                    </div>
                    {/* <div>
                    <Link to="/">
                    <Nav.Link as="div" variant="btnStart" size="sm"> {idioma === 'es' ? es.ExperienciaLaboral : en.ExperienciaLaboral}</Nav.Link>
                    </Link>
                    </div> */}
                    <div>
                    <Link to="/">
                    <Nav.Link as="div" variant="btnStart" size="sm"> {idioma === 'es' ? es.EducaciónCertificaciones : en.EducaciónCertificaciones}</Nav.Link>
                    </Link>
                    </div>
                    {/* <div>
                    <Link to="/">
                    <Nav.Link as="div" variant="btnStart" size="sm"> {idioma === 'es' ? es.TestimoniosReferencias : en.TestimoniosReferencias}</Nav.Link>
                    </Link>
                    </div>  */}
                    <div>
                    <Link to="/">
                    <Nav.Link as="div" variant="btnStart" size="sm"> {idioma === 'es' ? es.Contacto : en.Contacto}</Nav.Link>
                    </Link>
                    </div>
                    <button onClick={cambiarIdioma}>
        <img className='iconLenguage'
          src={idioma === 'es' ? espana : inglaterra}
          alt={idioma === 'es' ? 'Español' : 'English'}
        />
      </button>
            </Container>
                </Navbar.Collapse>
        </Navbar>
        
    )
}

export default Navbarr

