import React from "react";
import "./styles/testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PrevArrow, NextArrow } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <div className="testimonies">
      <FontAwesomeIcon icon={PrevArrow} />
      <h2>What Our Customers say</h2>
      <div className="quotes">
        <blockquote>
          "The best I have ever fount No delays and The Best capture of all time
          <br />
          They promise they deliver in time "
        </blockquote>
        <span></span>
      </div>
      <FontAwesomeIcon icon={NextArrow} />
    </div>
  );
};

export default Testimonials;
