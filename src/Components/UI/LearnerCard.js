import React from "react";
import icon from "../../almabetter resoures/LinkedIn.png";
export const LearnerCard = ({
  image,
  heading,
  description,
  name,
  deignation,
}) => {
  return (
    <div className="learner-card">
      <div className="l-content">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="learner-content">
          <h1>{heading}</h1>
          <p>{description}</p>
          <div className="lower">
            <div className="lower-desc">
              <p>{name}</p>
              <p style={{ color: "red", fontWeight: "500" }}>{deignation}</p>
            </div>
            <div className="linkedIn">
              <a href="/">
                <img src={icon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
