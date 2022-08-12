import React from "react";
import "../../Css/NewsCard.css";

export const NewsCard = ({ image, text }) => {
  return (
    <div className="news-card">
      <div className="news-content news-f">
        <div className="news-img">
          <img src={image} alt="" />
        </div>
        <div className="news-dec news-f">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
