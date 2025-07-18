import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Hero from "./Hero";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  //handle click outisde
  const handleOutsideClick = (e) => {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (
      navMenu &&
      !navMenu.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      setMenuOpen(false);
    }
  };
  document.addEventListener("click", handleOutsideClick);
  () => document.removeEventListener("click", handleOutsideClick);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const navMenu = document.getElementById("nav-menu");
      const logo = document.getElementById("logo");
      const headerElem = document.querySelector("header");
      const navToggle = document.getElementById("nav-toggle");

      if (scrollTop > 0) {
        navMenu?.classList.add("is-sticky");
        logo?.style.setProperty("color", "#000");
        logo?.style.setProperty("background", "#f69314");
        headerElem?.style.setProperty("background", "#fefefe");
        navToggle?.style.setProperty("border-color", "#000");

        navToggle
          ?.querySelectorAll(".strip")
          .forEach((el) => el.style.setProperty("background-color", "#000"));
      } else {
        navMenu?.classList.remove("is-sticky");
        logo?.style.setProperty("background", "transparent");
        headerElem?.style.setProperty("background", "transparent");
        navToggle?.style.setProperty("border-color", "#fff");

        navToggle
          ?.querySelectorAll(".strip")
          .forEach((el) => el.style.setProperty("background-color", "#fff"));
      }

      // Padding and shadow toggle
      if (headerElem) {
        if (scrollTop >= 200) {
          headerElem.style.padding = "0.5rem";
          headerElem.style.boxShadow = "0 -4px 10px 1px #999";
        } else {
          headerElem.style.padding = "1rem 0";
          headerElem.style.boxShadow = "none";
        }
      }
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    // Trigger on mount
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="header-hero-container">
      <header>
        <div className="flex container">
          <a href="#" id="logo">
            <img src="/images/Pasted image.png" alt="Logo" />
          </a>
          <nav>
            <button
              id="nav-toggle"
              className="humburger-menu"
              onClick={() => setMenuOpen(true)}
            >
              <span className="strip"></span>
              <span className="strip"></span>
              <span className="strip"></span>
            </button>

            {/* menu toggle */}
            <ul
              id="nav-menu"
              className={`nav-menu ${menuOpen ? "open" : ""}`}
              style={{ right: menuOpen ? "0" : "-100%" }}
            >
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
              <li id="close-flyout" onClick={() => setMenuOpen(false)}>
                <span className="fas ">
                  <FontAwesomeIcon icon={faTimes} />
                </span>
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
