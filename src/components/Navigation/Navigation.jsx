
import { Nav, Container, Navbar, Button, Modal, Row } from 'react-bootstrap'

import { Link, useNavigate } from 'react-router-dom'
import logo from '../../resources/images/OliDeVgrey.png'


import './Navigation.css'

const Navigation = () => {


      return (
        
        <Navbar collapseOnSelect expand="lg" >
        
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">  
               
    <Navbar.Brand>
      <a href="/"><img src={logo} className='imgLogo' /></a>
    </Navbar.Brand>

            <Container className='circle'>
          <div>
                <Link to="/">
                    <Nav.Link as="div" variant="btnStart" size="sm"> Conóceme</Nav.Link>
                </Link>
                </div>
                <div>
                <Link to="/">
                    <Nav.Link as="div" variant="btnStart" size="sm"> Acerca de mi</Nav.Link>
                    </Link>
                    </div>
                    <div>
                    <Link to="/">
                    <Nav.Link as="div" variant="btnStart" size="sm"> Mis proyectos</Nav.Link>
                    </Link>
                    </div>
                    <div>
                    <Link to="/">
                    <Nav.Link as="div" variant="btnStart" size="sm"> Mi formación</Nav.Link>
                    </Link>
                    </div>
            </Container>
                </Navbar.Collapse>
        </Navbar>
        
    )
}

export default Navigation

