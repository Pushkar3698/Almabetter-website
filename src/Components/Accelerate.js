import React from "react";
import "../Css/Accelerate.css";
import image from "../almabetter resoures/accelerate.png";
import Button from "./UI/Button";

export const Accelerate = () => {
  return (
    <div className="acc-container">
      <div className="acc-main">
        <div className="acc-image">
          <img src={image} alt="" />
        </div>
        <div className="acc-content  margin-t-b">
          <p style={{ fontSize: "25px" }}>
            Accelerate with the AlmaBetter Community.
          </p>
          <p style={{ fontSize: "18px" }}>
            Explore, network, and grow with the community of most passionate
            tech folks.
          </p>
          <Button className="hero-btn  margin-t-b" text="Learn More" />
        </div>
      </div>
    </div>
  );
};
