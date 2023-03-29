import React from "react";
import img2 from "../../img/111.png";
import img3 from "../../img/3.png";
import img4 from "../../img/1.1.png";
import img5 from "../../img/2.png";
import img6 from "../../img/4.png";
import img7 from "../../img/5.png";
import img8 from "../../img/6.png";
import img9 from "../../img/7.5.png";
import img10 from "../../img/7.png";
import img11 from "../../img/8.5.png";
import img12 from "../../img/8.png";
import img13 from "../../img/9.png";
import img14 from "../../img/001.png";
import "./Main.css";
function Main() {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="left">
            <h1>SAVING YOUR MONEY FOR TRAVEL THROUGH TRAVEL FUND</h1>
            <br />
            <p>
              Save your money for travel securely and explore the whole world
              with trasave, we provide you the best travel services.
            </p>
            <br />
            <button>Save now</button>
            <br />
            <button>UI/UX Case Study</button>
            <div className="box">
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="right">
            <img src={img4} alt="" />
            <div className="c">
              <img src={img5} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mayn">
        <div className="container">
          <div className="center">
            <h1>Why to travel with us?</h1>
            <p>
              Ambitious about your next adventure but sick of saving money? End
              up sneaking into those savings because well.. You’re bored? Lost
              motivation? You don’t feel the funds are growing fast enough?
              Saving just sucks? Trasave has introduced an epic new way to
              reward you for your savings for travel
            </p>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="card">
        <div className="container">
          <div className="box">
            <div className="c">
              <img src={img6} alt="" />
              <h1>Save money</h1>
              <p>Invest in trasave securily for future</p>
            </div>
            <div className="c">
              <img src={img7} alt="" />
              <h1>Earn rewards</h1>
              <p>Earn rewards and track your money</p>
            </div>
            <div className="c">
              <img src={img8} alt="" />
              <h1>Travel</h1>
              <p>Use this money for your travelling</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="ther">
        <div className="container">
          <div className="left">
            <h1>Save and get Travel Fund Rewards</h1>
            <p>
              Trasave travel fund is a fun and secure way to save. Not only can
              you customise your own travel journey but also earn rewards while
              travelling by uploading videos of the destination. Also it gives
              cool tips to encourage more savings and we will also reward you
              with epic cool gifts when you hit saving goals.{" "}
            </p>
          </div>
          <div className="right">
            <img src={img9} alt="" />
            <div className="d">
              <img src={img10} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="four">
        <div className="container">
          <div className="left">
            <img src={img11} alt="" />
            <div className="g">
              <img src={img12} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>Find the best places of the world</h1>
            <p>
              We at trasave provide ou the best destination for travel, go and
              find new places and add to your travel list and go for travel
              later and enjoy, use your saved money later without thinking about
              money
            </p>
          </div>
        </div>
      </div>
      <div className="div">
        <div className="container">
          <div className="left">
            <h1>Save now and earn cashback upto 250</h1>
            <p>We at trasave provide ou the best destination for travel, </p>
            <button>Let’s save</button>
          </div>
          <div className="right">
            <img src={img13} alt="" />
          </div>
        </div>
      </div>
      <div className="mainn">
        <div className="container">
          <div className="left">
            <h1>
              Save your travel money in Trasave and get top grade security with
              trasave
            </h1>
          </div>
          <div className="right">
            <p>
              There are so many benefits of travelling with Trasave. Not only do
              we provide you with an awesome digital travel solution , an
              awesome travel app, but we also make it super easy and fun for you
              to store, save and move your travel money. As well as saving
              money, the TRASAVE travel fund is a good way to track your travel
              money. Tracking Expenses is important when travelling as you don’t
              want to be stuck in the middle of your journey budgeting your
              travel. We created the travel fund so you can store all your
              travel money and then track your money from your travel fund
              expense tracker.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="non">
        <div className="container">
          <div className="top">
            <div className="box">
              <div className="s">
                <img src={img14} alt="" />
              </div>
              <div className="dd">
                <p>About </p>
                <p>Technical InfoOther Products </p>
                <p>Other Products</p>
              </div>
              <div className="f">
                <p>Contact US</p>
                <p>Banglor, India</p>
                <p>8003010108</p>
                <p>hemendra.mali72@gmail.com</p>
              </div>
              <div className="k">
                <p>Subscribe Newsletter</p>
                <form action="">
                  <input type="text" placeholder="Enter your email" />
                </form>
              </div>
            </div>
          </div>
          <div className="bottom">
            <p>copright 2022 Hemendra Mali. All right reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
