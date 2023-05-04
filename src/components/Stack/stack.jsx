import React from "react";
import {
  DiReact,
  DiJavascript1,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiBootstrap,
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { Row, Col } from "react-bootstrap";
import "./stack.css";

const Stack = () => {
  return (
    <section id="stack " className="m-5 p-5">
      <h1 className="mb-5">Tecnologías utilizadas</h1>

      <Row className="p-5" my={5}>
        <div className="mb-5 d-flex">
          <Col xs={3} py={5}>
            <DiReact size={50} />
            <p>React Js</p>
          </Col>
          <Col xs={3} my={5}>
            <DiJavascript1 size={50} />
            <p>JavaScript</p>
          </Col>
          <Col xs={3} py={5}>
            <DiNodejsSmall size={50} />
            <p>Node Js</p>
          </Col>
          <Col xs={3} py={5}>
            <DiHtml5 size={50} />
            <p>HTML Js</p>
          </Col>
        </div>
        <Col xs={4} py={5}>
          <DiCss3 size={50} />
          <p>CSS Js</p>
        </Col>
        <Col xs={4} py={5}>
          <DiBootstrap size={50} />
          <p>Bootstrap</p>
        </Col>
        <Col xs={4} py={5}>
          <SiTailwindcss size={50} />
          <p>Tailwind css</p>
        </Col>
      </Row>
    </section>
  );
};

export default Stack;