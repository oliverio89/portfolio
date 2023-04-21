import React from 'react'
import './HomePage.css'
import Contact from '../../components/Contact/contact'
import About from '../../components/About/about';
import Projects from '../../components/Proyects/Proyects';
import Skills from '../../components/Skills/skills';
import Navbar from '../../components/Navbar/navbar';
import { LanguageProvider } from '../../contexts/LanguageContext.js'



const HomePage = () => {


    return (
        <>
        <LanguageProvider>
            <div> <Navbar /> </div>
            <div> <About /> </div>
            {/* <div> <Contact id="contacto" /> </div> */}
            <div> <Projects /> </div>
            {/* <div> <Skills /> </div> */}
            </LanguageProvider>
        </>
    )
}

export default HomePage

