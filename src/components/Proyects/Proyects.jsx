import React, { useContext } from "react";
import { projects } from "./data";
import Tilt from "react-parallax-tilt";
import { LanguageContext } from "../../contexts/LanguageContext.js";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";
import "./proyects.css";

function Projects() {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section id="projects" className="p-5 container">
      <div>
        <div className="">
          <h1 className="">{translations[language].Aplicaciones}</h1>
        </div>
        <Row my={2} className="p-4">
          {projects.map((project) => (
            <Col className="">
              <Tilt>
                <MDBCard background="dark opacit" className="text-white w-50">
                  <MDBCardImage overlay src={project.image} alt="..." />
                  <MDBCardOverlay
                    className="p-5 mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                  >
                    <MDBCardTitle>{project.title}</MDBCardTitle>
                    <MDBCardText>{project.subtitle}</MDBCardText>
                    <MDBCardText>{project.description}</MDBCardText>
                  </MDBCardOverlay>
                </MDBCard>
              </Tilt>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default Projects;
