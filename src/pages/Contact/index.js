import React from "react";
import { Animated } from "react-animated-css";
import emailjs from "emailjs-com";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import "./style.css";

export default function Contact() {


  function sendEmail(e) {
    e.preventDefault();

    // Getting user input
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    //Sending data to a Emailjs
    emailjs
      .send(
        "outlook",
        "pablo_s_resume",
        {
          from_name: name.value,
          from_email: email.value,
          project_request: message.value,
        },
        "user_gr7SytztNrsCuUsjCbmkW"
      )
      .then(
        function (response) {
          console.log("success", response);
          document.getElementById("form").reset();
          window.alert("Thank You.. Let you know Soon =)");
        },
        function (error) {
          console.log("failed", error);
        }
      );
  }
  return (
    <div className="row main-contact">
      <Animated
        animationIn="fadeInLeft"
        animationInDelay={1000}
        isVisible={true}
      >
        <p className="skill-title-1">LET'S </p>
      </Animated>
      <Animated
        animationIn="fadeInRight"
        animationInDelay={1000}
        isVisible={true}
      >
        <p className="skill-title-2">WORK TOGETHER</p>
      </Animated>

      <p className="p-text">
        Interested in working together? We should queue up a chat. I’ll buy the
        coffee.
      </p>

      <form className="cols12" onSubmit={sendEmail} id="form">
        <input type="text" id="name" placeholder="Name" />
        <input type="email" id="email" placeholder="Enter email" />
        <textarea
          name="message"
          id="message"
          placeholder="Your Message "
          cols="30"
          row="50"
        ></textarea>
        <button type="submit" value="Send">
          SUBMIT
        </button>
      </form>
      <Animated animationIn="bounce" animationInDelay={5700}>
        <a
          href="https://wa.me/3530896065434?text=
Hello,%20I'm%20getting%20in%20touch%20about%20..."
          target="_blank" rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="contact-icon" icon={faWhatsapp} />
        </a>
      </Animated>
    </div>
  );
}
