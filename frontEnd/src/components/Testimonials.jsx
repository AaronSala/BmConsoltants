import React from "react";
import Slider from "react-slick";
import "./styles/testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
const PrevArrow = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    &#60;
  </div>
);

const NextArrow = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    &#62;
  </div>
);

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="testimonies container">
      <h2 className="pb-4">What Our Customers say</h2>
      <Slider {...settings}>
        <div className="quotes ">
          <div className="image">
            <img src="#" alt="user Image" />
          </div>
          <span>User name1</span>

          <blockquote>
            "The best I have ever found. No delays and the best capture of all
            time.
            <br />
            They promise and they deliver in time."
          </blockquote>
        </div>
        <div className="quotes">
          <div className="image">
            <img src="#" alt="user Image" />
          </div>
          <span>User name2</span>
          <blockquote>
            "The best I have ever found. No delays and the best capture of all
            time.
            <br />
            They promise and they deliver in time."
          </blockquote>
        </div>
        {/* Add more slides here if needed */}
      </Slider>
    </div>
  );
};

export default Testimonials;
