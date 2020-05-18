import React from "react";
import { Animated } from "react-animated-css";

import "./style.css";
import profileImg from "../../assets/profile.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <div className="about-container">
      <section className="about row">
        <div className="col s12 m6">
          <Animated
            animationIn="fadeIn"
            animationindelay={1000}
            isVisible={true}
          >
            <img id="about-image" src={profileImg} alt="" />
          </Animated>
        </div>

        <div className="col s12 s6 ">
          <Animated animationIn="fadeInRight" isVisible={true}>
            <p className="about-text-1" animationInDelay={1500}>
              ABOUT ME
            </p>
          </Animated>
          <Animated animationIn="fadeIn" animationInDelay={1500}>
            <p className="about-text-3">
            I’m Pablo Patrick Gomes, Brazilian, 27 years old, living in
Dublin, Passionate about technology, Jordan shoes and music. I can work in Front-End, Back-end and Mobile. I have knowledge in React, React Native and Node Js. And also
in Python using Django / Flask.
            </p>
          </Animated>
          <section>
            <Animated
              animationIn="fadeIn"
              animationInDelay={1700}
              isVisible={true}
            >
              <a
                href="https://docs.google.com/document/d/1YlwbvGBJOnZoqcqAM7ZpfddWz7Gb5iRu8x7lpPSkioQ/edit?usp=sharing"
                target="_blank" rel="noopener noreferrer"
                className="waves-effect waves-light btn"
              >
                Download CV
              </a>
            </Animated>
          </section>
          <section id="icones-adjust">
            <Animated
              animationIn="fadeIn"
              animationInDelay={2000}
              isVisible={true}
            >
              <a href="https://github.com/pablogomezlhp" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="media-icon" icon={faGithubSquare} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100012549616547"target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  className="media-icon"
                  icon={faFacebookSquare}
                />
              </a>
              <a href="https://www.linkedin.com/in/pablopgsilva/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="media-icon" icon={faLinkedin} />
              </a>
              <a href="https://www.instagram.com/pablogomez.lhp/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  className="media-icon"
                  icon={faInstagramSquare}
                />
              </a>
            </Animated>
          </section>
        </div>
      </section>
    </div>
  );
}
