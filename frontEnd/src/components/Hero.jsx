import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/hero.css'

const Hero = () => {
  return (
    <div>
      <section id="hero">
        <div className="fade ">
          <div className="hero-text ">
            <h1>For Quality Images And Videos </h1>
            <h2>Lets keep All Memories Clean !</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam recusandae
              <br />
              ipsa illum animi unde vitae amet rem, maiores accusantium
              incidunt?
            </p>
          </div>
          <div className="moon"></div>
        </div>
      </section>
    </div>
  );
}

export default Hero
