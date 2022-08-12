import React from "react";
import { NavLink } from "react-router-dom";

export const Dropdown = ({ hover, settingHover, data, id }) => {
  let decision = hover === id;
  return (
    <>
      <div
        className="nav-dropdown"
        style={{
          visibility: `${decision ? "visible" : "hidden"}`,
          transform: `translateY(${decision ? "0px" : "15px"})`,
        }}
        onMouseEnter={() => settingHover(id)}
      >
        <ul>
          {data.map((el, i) => (
            <li key={i} className="drop-list">
              <NavLink to="/web">{el}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
