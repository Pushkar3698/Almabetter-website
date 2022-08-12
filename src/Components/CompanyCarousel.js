import React, { useEffect } from "react";
import "../Css/CompanyCarousel.css";
import { useSelector, useDispatch } from "react-redux";
import { FirstFilter, NextPage, PrevPage } from "./Redux/Actions";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export const CompanyCarousel = () => {
  const filteredArr = useSelector((state) => state.Reducer.filteredIcons);
  const PageNo = useSelector((state) => state.Reducer.page);

  const dispatch = useDispatch();

  const images = importAll(
    require.context(
      "../almabetter resoures/Carousel one",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  useEffect(() => {
    const iconsArr = [];

    for (const key in images) {
      iconsArr.push(images[key]);
    }

    dispatch(FirstFilter(iconsArr));
  }, []);

  const next = () => {
    dispatch(NextPage(PageNo + 1));
  };

  const previous = () => {
    dispatch(PrevPage(PageNo - 1));
  };

  let right = "-->";
  let left = "<--";

  return (
    <div className="carousel-container">
      <div className="carousel-box">
        <div className="carousel-desc">
          <h1>Fuel your career with our 500+ hiring partners</h1>
          <p>Get closer to your dream company</p>
          <p>Our graduates are working with leading tech brands</p>
        </div>
        <div className="carousel-main-container">
          <div className="carousel-main">
            {filteredArr.length > 0 &&
              filteredArr.map((el, i) => {
                return (
                  <img src={el} alt="" key={i} className="carousel-icon" />
                );
              })}
          </div>

          <div className="carousel-btn">
            <button className="carousel-left" onClick={previous}>
              {left}
            </button>
            <button className="carousel-right" onClick={next}>
              {right}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
