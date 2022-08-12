import React, { useState, useEffect } from "react";
import logo from "../almabetter resoures/logo.png";
import "../Css/Navbar.css";
import { Dropdown } from "./UI/Dropdown";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [sideBar, setsideBar] = useState(true);
  const [hover, sethover] = useState(0);
  const [model, setmodel] = useState(true);

  useEffect(() => {
    if (window.screen.width < 1120) {
      setsideBar(false);
    }
  }, []);

  const settingHover = (val) => {
    sethover(val);
  };

  const data1 = ["Full Stack Data Science", "Full Stack Web Development"];

  const data2 = [
    "blogs",
    "events",
    "success stories",
    "AlmaX",
    "FAQS",
    "Almabetter on news",
  ];

  return (
    <>
      <div className="nav-all">
        {model && (
          <div className="alert-container">
            <div>
              <p>
                ANNOUNCEMENT: Last chance to enrol at a lower price! Enrolment
                fee for the Full Stack Data Science program will increase w.e.f
                18 Aug 2022.
              </p>
            </div>
            <div className="close-alert" onClick={() => setmodel(false)}>
              X
            </div>
          </div>
        )}

        <div className="nav-container">
          <div
            className="line-container"
            onClick={() => setsideBar((prev) => !prev)}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>

          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="" width="200px" />
            </NavLink>
          </div>
          <div className="nav-links" onMouseLeave={() => sethover(0)}>
            <div
              className="navlink-container"
              style={{ transform: `translateX(${sideBar ? "0%" : "-100%"})` }}
            >
              <li className="nav-listItems" onMouseEnter={() => sethover(1)}>
                <a href="">Courses</a>
                <Dropdown
                  hover={hover}
                  key={1}
                  settingHover={settingHover}
                  data={data1}
                  id={1}
                />
              </li>
              <li className="nav-listItems">
                <a href="" onMouseEnter={() => sethover(2)}>
                  About
                </a>
                <Dropdown
                  hover={hover}
                  key={2}
                  settingHover={settingHover}
                  data={data2}
                  id={2}
                />
              </li>
              <li className="nav-listItems">
                <a href="">Community</a>
              </li>
              <li className="nav-listItems">
                <a href="">Hire from us</a>
              </li>

              {/* <Dropdown
            hover={hover}
            settingHover={settingHover}
            data={data1}
            id={1}
            heading="Courses"
            key={1}
          />
          <Dropdown
            hover={hover}
            settingHover={settingHover}
            data={data2}
            id={2}
            heading="About"
            key={2}
          /> */}

              {/* <a href="" style={{ color: `${hover === 1 ? "red" : "black"}` }}>
            <li
              className="nav-listItems drop-1"
              onMouseEnter={() => sethover(1)}
            >
              Courses
            </li>
            <div
              className="nav-dropdown"
              style={{
                visibility: `${hover === 1 ? "visible" : "hidden"}`,
                transform: `translateY(${hover === 1 ? "0px" : "15px"})`,
              }}
              onMouseEnter={() => sethover(1)}
            >
              <ul>
                <li>
                  <a href="">Full Stack Data Science</a>
                </li>
                <li>
                  <a href="">Full Stack Web Development</a>
                </li>
              </ul>
            </div>
          </a> */}
            </div>
            <div className="nav-btn">
              <button>
                <NavLink to="/signup">Sign-In</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
