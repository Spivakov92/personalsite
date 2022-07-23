import React from "react";
import "./experience.scss";

import { DiHtml5, DiCss3, DiJavascript1, DiReact } from "react-icons/di";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3></div>
          <div className="experience__content">
            <article className="experience__details">
              <DiHtml5  className="experience__details-icon"/>
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <DiCss3  className="experience__details-icon"/>
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <DiJavascript1  className="experience__details-icon"/>
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <DiReact  className="experience__details-icon"/>
              <h4>React</h4>
            </article>
          </div>
        
      </div>
    </section>
  );
};

export default Experience;
