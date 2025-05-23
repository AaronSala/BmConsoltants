import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/header.css";

import Hero from "./Hero";

const Header = () => {
  return (
    <div id="header-hero-container">
      <header>
        <div className="flex container">
          <a href="#" id="logo" className="">
            <img src="/Pasted image.png" />
          </a>
          <nav>
            <button id="nav-toggle" className="humburger-menu">
              <span className="strip"></span>
              <span className="strip"></span>
              <span className="strip"></span>
            </button>

            <ul id="nav-menu">
              <li>
                <a href="#" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
             
              <li>
                <a href="#">Contacts</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li id="close-flyout">
                <span className="fas fa-times"></span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Hero />
    </div>
  );
};

export default Header;
