import React from "react";
import Typical from "react-typical";
import { Animated } from "react-animated-css";

import "./style.css";

export default function Home() {
  return (
    <div className="main-container">
      <div className="main row">
        <div className="col s12">
          <Animated
            animationIn="fadeIn"
            animationInDelay={600}
            isVisible={true}
          >
            <p className="main-text-1">I AM.. </p>
          </Animated>
          <p className="main-text-2">
            <Typical
              animationInDuration={990000}
              loop={1}
              wrapper={"b"}
              steps={[
                3000,
                "FRONT-END",
                1500,
                "BACK-END",
                1500,
                "AND MOBILE DEVELOPER",
                2500,
                "REACT DEVELOPER",
                4000,
              ]}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
