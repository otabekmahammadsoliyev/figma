/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import img002 from "../../img/6.png";
import img001 from "../../img/reebok_web (1).png";
import "../Home/HomeCss/homep.css"

function Homep() {
  return (
    <>
      <div className="hom">
        <div className="container">
          <a href="">Online fashion store - Homepage</a>
          <img src={img001} alt="" />
          <a href="">Reebok Store - Concept</a>
          <img src={img002} alt="" />
          <a href="">Braun Landing Page - Concept</a>
        </div>
      </div>
    </>
  );
}

export default Homep;
