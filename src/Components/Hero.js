import React, { useEffect, useState } from "react";
import Heroimg from "../almabetter resoures/Hero.png";
import "../Css/Hero.css";
import Button from "./UI/Button";

export const Hero = () => {
  const [count, setcount] = useState(0);
  const dynamicContent = [
    "Almabetter",
    "Cohorts",
    "Code",
    "Community",
    "Collaboration",
  ];

  useEffect(() => {
    if (count > dynamicContent.length - 1) {
      setcount(0);
    }
    const interval = setInterval(() => {
      setcount((prev) => prev + 1);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="hero-head">
          <h1>Learning is better with</h1>
          <p className="hero-dyn">{dynamicContent[count]}</p>

          <div className="hero-disc">
            <p>
              Launch your career in Data Science & Web Development Earn ₹ 6-25
              LPA at leading companies Pay us after you land your dream job
            </p>
            <Button className="hero-btn " text="Explore Courses" />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={Heroimg} alt="" />
      </div>
    </div>
  );
};
