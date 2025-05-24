import React from "react";
import "./styles/offers.css";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faVideo,
  faHelicopter,
} from "@fortawesome/free-solid-svg-icons";

const Offers = () => {
  return (
    <div>
      <section id="how-it-works">
        <div className="container">
          <h2>What We Offer.</h2>
          <div className="flex">
            <div>
              <span className="fas fa-camcorder">
                <FontAwesomeIcon icon={faVideo} />
              </span>
              <h4>Video Editing</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div>
              <span className="fas ">
                <FontAwesomeIcon icon={faCamera} />
              </span>
              <h4>Photography</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div>
              <span className="fas ">
                <FontAwesomeIcon icon={faHelicopter} />
              </span>
              <h4>Video Coverage</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
