import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../../assets/logo.svg";

import "./style.css";

class Navbar extends Component {
  componentDidMount() {

    //Getting a Mobile/Ipad Menu
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  }

  render() {
    return (
      <div>
        <main>
          <nav>
            <div className="nav-wrapper">
              <a to="/" data-target="mobile-demo" className="sidenav-trigger">
                <i id="hambu" className="material-icons">
                  menu
                </i>
              </a>
              <a href="/" className="brand-logo">
                <img src={logoImage} alt="" />
              </a>
              <ul className="right hide-on-med-and-down">
                <div className="nav-menudviv">
                  <li>
                    <NavLink className="nav-menu" to="/">
                      HOME
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-menu" to="about">
                      ABOUT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-menu" to="skills">
                      PROJECTS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-menu" to="contact">
                      CONTACT
                    </NavLink>
                  </li>
                </div>
              </ul>
            </div>
          </nav>

          <ul className="sidenav" id="mobile-demo">
            <li>
              <NavLink className="nav-menu" to="/">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-menu" to="about">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-menu" to="skills">
                PROJECTS
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-menu" to="contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </main>

        <footer>2020 @PABLO GOMES</footer>
      </div>
    );
  }
}

export default Navbar;
