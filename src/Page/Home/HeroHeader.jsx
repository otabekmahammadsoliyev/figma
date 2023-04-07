import React from "react";
import "./HomeCss/heroHeader.css";
import img from "../../img/a.jpg"
const HeroHeader = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1>
            Maxmmadsoliyev <br /> Otabek
          </h1>
          <p>UX | UI designer <br /> 16 years 2006, Minsk</p>
          <p>RU | ENG</p>
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroHeader;
