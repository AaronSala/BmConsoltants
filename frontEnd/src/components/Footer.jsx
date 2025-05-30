import React from 'react'
import "./styles/footer.css"

const Footer = () => {
    return (
      <div className='footer'>
    <div className="flex container">
        <div className="footer-about">
          <h5>About Stated</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            deserunt dolorem rerum neque deleniti possimus atque dignissimos
            exercitationem dolore soluta. Ut animi atque numquam sequi illum
            sed!
          </p>
        </div>

        <div className="footer-quick-links">
          <h5>Quick links</h5>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contac Us</a></li>
          </ul>
        </div>
        <div className="footer-subscribe">
          <h5>Subscribe to our newsletter</h5>
          <div id="subscribe-container">
            <input type="text" placeholder="Enter email" />
            <button className="button-rounded">Send</button>
          </div>

          <h5 className="follow-us">Follow Us</h5>
          <ul>
            <li>
              <a href="#"><span className="fa-brands fa-facebook-f"></span></a>
            </li>
            <li>
              <a href="#"><span className="fa-brands fa-x-twitter"></span></a>
            </li>
            <li>
              <a href="#"
                ><span className="fa-brands fa-square-instagram"></span
              ></a>
            </li>
            <li>
              <a href="#"><span className="fa-brands fa-linkedin-in"></span></a>
            </li>
          </ul>
        </div>
      </div>
      <div className='small'>Copyright &copy; 2024 All rights reserved | This project is made with
        <span className="fa fas-heart"></span> by Aaron</div>
      </div>
  )
}

export default Footer
