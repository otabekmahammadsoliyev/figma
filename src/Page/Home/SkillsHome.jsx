import React from "react";
import "./HomeCss/skills.css";
import img121 from "../../img/1.png";
import img122 from "../../img/2.png";
import img123 from "../../img/3.png";
import img124 from "../../img/4.png";
function SkillsHome() {
  return (
    <>
      <div className="skil">
        <div className="container">
          <h1>Skills</h1>
          <p>I work in such programs as</p>
          <div className="box">
            <div className="a">
              <img src={img121} alt="" />
              <h1>Adobe <br /> Photoshop</h1>
            </div>
            <div className="a">
              <img src={img122} alt="" />
              <h1>Adobe <br /> Illustrator</h1>
            </div>
            <div className="a">
              <img src={img123} alt="" />
              <h1>Adobe <br /> After Effects</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsHome;
