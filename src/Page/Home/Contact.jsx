import React from "react";
import "../Home/HomeCss/contact.css";
import img0000 from "../../img/Group 12.png";
function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <h1>Contacts</h1>
          <p>Want to know more or just chat? You are welcome!</p>
          <button>Send message</button>
          <div className="asa">
            <img src={img0000} alt="" />
            <p>
              Like me on LinkedIn, Instagram, <br /> Behance, Dribble
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
