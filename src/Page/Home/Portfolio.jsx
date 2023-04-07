import React from "react";
import "../Home/HomeCss/portf.css";
import img00 from "../../img/5.png"
function Portfolio() {
  return (
    <>
      <div className="pofoliya">
        <div className="container">
          <h1>Portfolio</h1>
          <img src={img00} alt="" />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
