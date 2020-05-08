import React from "react";
import { Animated } from "react-animated-css";

import "./style.css";

export default function Skill() {
  return (
    <div className="container-skill ">
      <div className="grid-container">
        <Animated animationIn="flipInY" animationindelay={500} isVisible={true}>
          <div className="item1">
            <div className="item-block">
              <p className="project-title">TRAVIS SCOTT</p>
              <p className="project-subtitle">Fan Web Page</p>
              <p className="project-desc">
                The simple page developed with HTML / CSS / JS and the Bootstrap
                Framework
              </p>
              <a
                href="https://pablogomezlhp.github.io/2611FrontEnd/"
                target="_blank"
                className="project-button btn"
              >
                VISIT
              </a>
            </div>
          </div>
        </Animated>
        <Animated animationIn="flipInX" animationindelay={500} isVisible={true}>
          <div className="item2">
            <div className="item-block">
              <p className="project-title">RECIPES</p>
              <p className="project-subtitle">CRUD Web Page</p>

              <p className="project-desc">
                CRUD Developed in Python with Flask, Materialize and MONGO DB as
                a server
              </p>
              <a
                href="https://milestoneproject04pablosilva.herokuapp.com/"
                target="_blank"
                className="project-button btn"
              >
                VISIT
              </a>
            </div>
          </div>
        </Animated>
        <Animated animationIn="flipInY" animationindelay={500} isVisible={true}>
          <div className="item3">
            <div className="item-block">
              <p className="project-title">BE THE HERO</p>
              <p className="project-subtitle">Full-Stack Project</p>

              <p className="project-desc">
                {" "}
                A Complete Web / Mobile Aplication Developed with React JS,
                React Native and NodeJS.{" "}
              </p>
              <a
                href="https://github.com/pablogomezlhp/be-the-hero-App"
                target="_blank"
                className="project-button btn"
              >
                VISIT
              </a>
            </div>
          </div>
        </Animated>
        <Animated animationIn="flipInY" animationindelay={500} isVisible={true}>
          <div className="item4">
            <div className="item-block">
              <p className="project-title">ASTROWORD TOUR</p>
              <p className="project-subtitle">Web Page</p>

              <p className="project-desc">
                A simple WebPage developed with HTML, CSS and Bootstrap
              </p>
              <a
                href="https://pablogomezlhp.github.io/codeproject-milestone/"
                target="_blank"
                className="project-button btn"
              >
                VISIT
              </a>
            </div>
          </div>
        </Animated>
        <Animated animationIn="flipInX" animationindelay={500} isVisible={true}>
          <div className="item5">
            <div className="item-block">
              <p className="project-title">SEARCH A MOVIE API</p>
              <p className="project-subtitle">The Movie Database (TMDb) API </p>

              <p className="project-desc">
                Millions of movies, TV shows and people to discover. Explore
                now.
              </p>
              <a
                href="https://pablogomezlhp.github.io/TestNonius/"
                target="_blank"
                className="project-button btn"
              >
                VISIT
              </a>
            </div>
          </div>
        </Animated>
        <Animated animationIn="flipInY" animationindelay={500} isVisible={true}>
          <div className="item6">
            <div className="item-block">
              <p className="project-title">GITHUB API</p>
              <p className="project-subtitle">EXPLORE GITHUB REPOSITORIES </p>

              <p className="project-desc">
                Developed with ReactJS and TypeScript. Axios, WebPack Tools{" "}
              </p>
              <a
                href="https://github.com/pablogomezlhp/dorsetproject.io"
                target="_blank"
                className="project-button btn"
              >
                VISIT
              </a>
            </div>
          </div>
        </Animated>
      </div>
    </div>
  );
}
