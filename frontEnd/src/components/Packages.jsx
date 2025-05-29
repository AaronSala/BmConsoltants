import React from "react";
import "./styles/packages.css";

const Packages = () => {
    return (
      <div className="package">
        <h2>Our Packages</h2>
        <div className="packages">
          <div className="card">
            <h3>Basic Package</h3>
            <ul>
              <li>1camera</li>
              <li>Video Recording</li>
              <li>Video Editing</li>
              <li>100 Photos (soft copy)</li>
            </ul>
            <div className="cost">
              <span >Cost $ 00:00</span>
              <button className="btn ">Book Now</button>
            </div>
          </div>
          <div className="card">
            <h3>Standard Package</h3>
            <ul>
              <li>2camera</li>
              <li>1 Drone</li>
              <li>Video Recording</li>
              <li>Live coverage</li>
              <li>Video Editing</li>
              <li>200 Photos ( 50 printed)</li>
            </ul>
            <div className="cost">
              <span>Cost $ 00:00</span>
              <button className="btn ">Book Now</button>
            </div>
          </div>
          <div className="card">
            <h3>Premium Package</h3>
            <ul>
              <li>4camera</li>
              <li>1 Drone</li>
              <li>Video Recording</li>
              <li>Live coverage</li>
              <li>Video Editing</li>
              <li>300 Photos ( 100 printed)</li>
              <li>Voice Over</li>
                    </ul>
                    
            <div className="cost">
              <span>Cost $ 00:00</span>
              <button className="btn ">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Packages;
