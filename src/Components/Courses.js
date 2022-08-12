import React from "react";
import "../Css/Courses.css";
import { Card } from "./UI/Card";
import gif from "../almabetter resoures/image.gif";
import gif2 from "../almabetter resoures/image2.gif";

const Courses = () => {
  return (
    <div className="courses-container">
      <div className="courses-main">
        <div className="courses-heading">
          <h1>Featured Courses</h1>
          <p>
            The most hands-on, practical, and intensive coding led courses to
            fulfil your ambitions
          </p>
        </div>
        <div className="courses-card">
          <Card
            image={gif}
            heading="Full Stack Data Science"
            text="Become a job-ready Data Science professional in 30 weeks. Join the largest tech community in India. Get a guaranteed job above 6 LPA."
          />
          <Card
            image={gif2}
            heading="Full Stack Web Development with Web3"
            text="Become a job-ready Web2 + Web3 developer in 30 weeks. Join the largest tech community in India. Get a guaranteed job above 6 LPA."
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
