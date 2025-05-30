import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/slider.css";

import { generateStars } from "./Stars";

const Sliders = () => {
  const stars = generateStars(600); // number of stars

  return (
    <div className="slides">
      <div className="starry-background">{stars}</div>

      <h2>Sample works</h2>
      <div className="slider-container" style={{ "--quantity": 7 }}>
        <div className="item" style={{ "--position": 1 }}>
          <img src={"/1748001519481.jpg"} />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img src={"/1748044732464.jpg"} />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img src={"/1748044746272.jpg"} />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img src={"/1748044746272.jpg"} />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img src={"/1748044746272.jpg"} />
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <img src={"/1748044786069.jpg"} />
        </div>
        <div className="item" style={{ "--position": 7 }}>
          <img src={"/1748044800461.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default Sliders;
