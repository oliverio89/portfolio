import React from "react";
import {
  DiReact,
  DiJavascript1,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const Stack = () => {
  return (
    <div>
      <h1>Tecnologías utilizadas</h1>
      <div className="d-flex col-6 justify-content-center">
        <DiReact size={50} />
        <p>React Js</p>
        <DiJavascript1 size={50} />
        <p>JavaScript</p>
        <DiNodejsSmall size={50} />
        <p>Node Js</p>
        <DiHtml5 size={50} />
        <p>HTML Js</p>
        <DiCss3 size={50} />
        <p>CSS Js</p>
        <DiBootstrap size={50} />
        <p>Bootstrap</p>
        <SiTailwindcss size={50} />
        <p>Tailwind css</p>
      </div>
    </div>
  );
};

export default Stack;
