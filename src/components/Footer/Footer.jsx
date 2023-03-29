import React from "react";
import "./Footer.css";
// import img55 from "../../img/7.5.png";
import img44 from "../../img/12.png";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="top">
            <h1>Thanks For </h1>
            <div className="da">
              <div className="left">
                <h1>Watching</h1>
                <p>
                  We are professional UI/UX and Graphice designer. Design your
                  product or new website with us. Feel free to contact us.{" "}
                </p>
              </div>
              <div className="right">
                <img src={img44} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
