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

function Projects() {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section id="projects" className="p-5">
      <div className="container px-5">
        <div className="">
          <h1 className="">{translations[language].Aplicaciones}</h1>
        </div>
        {projects.map((project) => (
          <Row xs={1} md={2} className="g-4 p-5">
            <Col className="">
              <Tilt>
                {/* <a href={project.link} key={project.image} className="p-5">
                  <div className="p-2">
                    <img alt="gallery" className="w-50" src={project.image} />
                    <div className="text-white ">
                      <h2 className="">{project.title}</h2>
                      <h3 className="">{project.subtitle}</h3>
                      <p className="">{project.description}</p>
                    </div>
                  </div>
                </a> */}
                <MDBCard background="dark opacit" className="text-white">
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
          </Row>
        ))}
      </div>
    </section>
  );
}

export default Projects;
