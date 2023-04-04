import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './contact.css'

function Contact() {


    return    <div className="contact-links">

      <a href="https://www.linkedin.com/in/victor-wdfs" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="contact-icon" />
      </a>
      <a href="https://github.com/oliverio89" target="_blank" rel="noopener noreferrer">
        <FaGithub className="contact-icon" />
      </a>
      {/* <a href="mailto:oliverio89@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope className="contact-icon" />
      </a> */}
  </div>

   
}

export default Contact