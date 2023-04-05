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

            <Navbar bg="transparent" expand="lg" className="navbar-transparent navbar-light" >
      <Navbar.Brand href="#"><img src={logo} className='imgLogo' alt='imgLogo'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" className="text-white">Home</Nav.Link>
          <Nav.Link href="#" className="text-white">Acerca de</Nav.Link>
          <Nav.Link href="#contact" className="text-white">Contacto</Nav.Link>
        </Nav>
                    <button onClick={cambiarIdioma}>
        <img className='iconLenguage'
          src={idioma === 'es' ? espana : inglaterra}
          alt={idioma === 'es' ? 'Español' : 'English'}
        />
      </button>
      </Navbar.Collapse>
    </Navbar>
                  
    )
}

export default Navbarr

