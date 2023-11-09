import React from "react";
import "./About.css";
import Team from "./team.png";

const About = () => {
  return (
    <section id="about-section">
      {/* about left  */}
      <div className="about-left">
        <img src={Team} alt="About Img" />
      </div>

      {/* about right  */}
      <div className="about-right">
        <h1>Our Team</h1>

        <p>
          Our team is a diverse group of experts comprising experienced
          journalists, analysts, and correspondents from various parts of the
          world. Their deep expertise, dedication to research, and passion for
          journalism form the core of our editorial team. Our journalists are
          here to investigate and report on the latest events, our analysts
          provide deeper insights and analyses, while our correspondents bring
          local perspectives and firsthand stories. This diverse team enables us
          to deliver comprehensive and reliable coverage from all corners of the
          globe.
        </p>
        <div className="address">
          <ul>
            <li>
              <span className="address-logo">
                <i className="fas fa-paper-plane"></i>
              </span>
              <p>State</p>
              <span className="saprater">:</span>
              <p>Serbia, Belgrade</p>
            </li>
            <li>
              <span className="address-logo">
                <i className="fas fa-phone-alt"></i>
              </span>
              <p>Call center</p>
              <span className="saprater">:</span>
              <p>+91 987-654-4321</p>
            </li>
            <li>
              <span className="address-logo">
                <i className="far fa-envelope"></i>
              </span>
              <p>Email </p>
              <span className="saprater">:</span>
              <p>globalnewshub@journal.com</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
