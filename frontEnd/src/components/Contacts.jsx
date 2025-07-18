import React from "react";
import "./styles/contacts.css";

const Contacts = () => {
  return (
    <div className="contacts" id="contacts">
      <div className="container">
        <h2>Contact us</h2>
        <div className="flex">
          <div id="form-container">
            <h3>Contact form</h3>
            <form action="">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />

              <label htmlFor="email">Email</label>
              <input type="email" id="imail" />

              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" />

              <label htmlFor="message">Message</label>
              <textarea name="" id="message">
                write you rmessage here
              </textarea>

              <button className="button">Send Message</button>
            </form>
          </div>
          <div id="address-container">
            <label htmlFor="address">Address</label>
            <address> Nairobi r</address>

            <label htmlFor="phone">Phone</label>
            <a href="#">+2547xxxxxxxxx</a>

            <label htmlFor="">Email Address</label>
            <a href="#">ouremail.@bm.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
