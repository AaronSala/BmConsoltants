import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/slider.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";


const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
    return (
      <div className="slides">
        <h2>Sample works</h2>
        <div className="slider-container">
          <div>
            <img src={"/1748001519481.jpg"} />
          </div>
          <div>
            <img src={"/1748044732464.jpg"} />
          </div>
          <div>
            <img src={"/1748044746272.jpg"} />
          </div>
          <div>
            <img src={"/1748044786069.jpg"} />
          </div>
          <div>
            <img src={"/1748044800461.jpg"} />
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    );
};

export default Sliders;
