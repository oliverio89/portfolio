import "./navbar.css";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../resources/images/OliDeVgrey.png";
import React, { useState, useContext } from "react";
import espana from "../../resources/images/icons8-spain-48.png";
import inglaterra from "../../resources/images/icons8-united-kingdom-48.png";
import { LanguageContext } from "../../contexts/LanguageContext.js";

function Navbarr() {
  const { language, translations, changeLanguage } =
    useContext(LanguageContext);

  const [lang, setIdioma] = useState("es");

  const handleLanguageChange = () => {
    setIdioma(lang === "en" ? "es" : "en");
    changeLanguage(lang);
  };

  return (
    <Navbar
      bg="transparent"
      expand="lg"
      className="navbar-transparent navbar-light "
    >
      <Navbar.Brand href="/">
        <img src={logo} className="imgLogo" alt="imgLogo" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav "
        className="my-navbar-toggler "
      />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="d-flex align-items-center justify-content-center"
      >
        <Nav className="mr-auto navbarSub">
          <Nav.Link href="#projects" className="text-white p-5">
            {translations[language].Proyectos}
          </Nav.Link>
          <Nav.Link href="#about" className="text-white p-5">
            {translations[language].AcercaDeMí}
          </Nav.Link>
          <Nav.Link href="#stack" className="text-white p-5">
            {translations[language].Stack}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <button
        onClick={() => handleLanguageChange()}
        className="botonIdioma bg-success bg-opacity-10"
      >
        <img
          className="iconLenguage"
          src={lang === "es" ? inglaterra : espana}
          alt={lang === "es" ? "English" : "Español"}
        />
      </button>
    </Navbar>
  );
}

export default Navbarr;
