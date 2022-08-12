import React from "react";
import "../../Css/Card.css";

export const Card = ({ image, heading, text }) => {
  return (
    <div className="card">
      <div className="card-upper">
        <span className="card-image">
          <img src={image} alt="" width="86px" />
        </span>
        <div className="main-text">{heading}</div>
        <div className="text">
          Learn from scratch. No prior coding experience required.
        </div>
      </div>
      <div className="card-lower">
        <div className="description">{text}</div>
        <div className="btn">
          <button>Explore Course</button>
        </div>
      </div>
    </div>
  );
};
