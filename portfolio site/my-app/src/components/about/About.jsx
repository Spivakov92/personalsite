import React from "react";
import "./about.scss";
import Me from "../../assets/myself2.png";
import { FaUniversity, FaAward } from "react-icons/fa";

const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="myself" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUniversity className="about__card-icon" />
              <h5>Educatiuon</h5>
              <small>architecrure - bachelore</small>
            </article>
            <article className="about__card">
              <FaAward className="about__card-icon" />
              <h5>Certification</h5>
              <small>Front end development - Logos IT academy</small>
            </article>
            {/* <article className="about__card">
              <FaUniversity className="about__card-icon" />
              <h5>Educatiuon</h5>
              <small>architecrure - bachelore</small>
            </article> */}
          </div>

          <p>
            Passionate about creating web applications and working with
            cutting-edge technologies. Always ready to learn new technologies
            and improve skills. Fast learner. Open to challenges, responsible
            and punctual.
          </p>
          <a href="#contacts" className="btn btn-primary">Hire me</a>
        </div>
      </div>
    </section>
  );
};

export default about;
