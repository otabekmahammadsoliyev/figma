/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import img1 from "../../img/1.svg";
import "./Navbar.css";
function Navbar() {
  const [oz, setOz] = useState(false);
  const ActivNav = () => {
    setOz(!oz);
  };
  return (
    <>
      <nav>
        <div className="container">
          <div className="left">
            <img src={img1} alt="" />
            <svg
              onClick={ActivNav}
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
              width={"30"}
              height={"30"}
            >
              <path
                d="m22 8c0-.478-.379-1-1-1h-13c-.62 0-1 .519-1 1v13c0 .621.52 1 1 1h13c.478 0 1-.379 1-1zm-13.5.5h12v12h-12zm-2.5-2.5h13.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-13.75c-.53 0-1 .47-1 1v13.75c0 .414.336.75.75.75s.75-.336.75-.75zm-2.5-2.5h13.75c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.25c-.53 0-1 .47-1 1v14.25c0 .414.336.75.75.75s.75-.336.75-.75z"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <div className="box">
            <div className="center">
              <a href="">Home</a>
              <a href="">Save</a>
              <a href="">Travel</a>
              <a href="">Experience</a>
              <a href="">Wallet</a>
            </div>
            <div className="right">
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`activNav ${oz ? "active" : ""}`}>
        <div className="box">
          <svg
            onClick={ActivNav}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
          >
            <path
              d="m21 3.998c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-8.991 6.932 2.717-2.718c.146-.146.338-.219.53-.219.405 0 .751.325.751.75 0 .193-.073.384-.219.531l-2.718 2.717 2.728 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.531-.219l-2.728-2.728-2.728 2.728c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .384.073.53.219z"
              fillRule="nonzero"
            />
          </svg>
          <div className="center">
            <a href="">Home</a>
            <a href="">Save</a>
            <a href="">Travel</a>
            <a href="">Experience</a>
            <a href="">Wallet</a>
          </div>
          <div className="right">
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
