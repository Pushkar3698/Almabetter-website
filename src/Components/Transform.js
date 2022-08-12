import React from "react";
import photo from "../almabetter resoures/Transform.png";
import "../Css/Transform.css";
export const Transform = () => {
  return (
    <div className="transform-container">
      <div className="transform-desc">
        <h1>Transforming learnings and advancing careers in tech.</h1>
        <p>
          We are revolutionising the way skills, experiences, and learning
          outcomes are delivered online. Join the largest tech community and
          fast forward your career with AlmaBetter.
        </p>
      </div>
      <div className="transform-img">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};
