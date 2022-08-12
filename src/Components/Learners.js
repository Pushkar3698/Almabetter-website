import React, { useRef, useState } from "react";
import "../Css/Learners.css";

import image from "../almabetter resoures/learn.png";
import { LearnerCard } from "./UI/LearnerCard";
import Button from "./UI/Button";
const slideLeft = 333;

const Learners = () => {
  const [slide, setslide] = useState(0);
  const [arr, setarr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const slideRef = useRef();

  const right = () => {
    let width = slideRef.current.offsetWidth;
    let calc = width - slideLeft * 4;

    if (Math.abs(slide - slideLeft) > calc) {
      setslide(-calc);
    } else {
      setslide((prev) => prev - slideLeft);
    }
  };
  console.log(slide);
  const left = () => {
    if (Math.abs(slide) < slideLeft) {
      setslide(0);
    } else {
      setslide((prev) => prev + slideLeft);
    }
    console.log(slide, Math.abs(slide));
  };

  return (
    <div className="learner-container">
      <h1>Learners</h1>
      <div className="learner-main">
        <div className="learner-card-container">
          <div
            className="learner-carousel"
            style={{ left: `${slide}px` }}
            ref={slideRef}
          >
            {arr.map((el, i) => (
              <LearnerCard
                key={i}
                image={image}
                heading="AlmaBetter believed in me and I believed in them."
                description="The program offered here is robust, well-guided and most importantly, has proven to work."
                deignation="Machine Learning Engineer"
                name="Vanshika Raj"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="l-btns">
        <button
          onClick={left}
          style={{ visibility: `${slide < 0 ? "visible" : "hidden"}` }}
        >
          left
        </button>
        <button onClick={right}>right</button>
      </div>
      <Button className="hero-btn d-flex margin-t-b" text="Success Stories" />
    </div>
  );
};

export default Learners;
