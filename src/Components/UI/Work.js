import React, { useRef, useEffect, useState } from "react";
import "../../Css/Work.css";
const Work = ({ image, head, text }) => {
  const [animation, setanimation] = useState(false);
  const workref = useRef();

  useEffect(() => {
    const current = workref.current;
    const observer = new IntersectionObserver(
      (entry) => {
        setanimation(entry[0].isIntersecting);
      },
      {
        root: null,
        threshold: "0.9",
      }
    );

    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, []);

  return (
    <>
      <div className="work-card" ref={workref}>
        <div
          className="left work-transition"
          style={{
            transform: `${animation ? "translateX(0%)" : "translateX(-120%)"}`,
            opacity: `${animation ? "1" : "0"}`,
          }}
        >
          <p>{head}</p>
        </div>

        <div className="work-circle">
          <img src={image} alt="" />
        </div>
        <div
          className="right work-transition"
          style={{
            transform: `${animation ? "translateX(0%)" : "translateX(120%)"}`,
            opacity: `${animation ? "1" : "0"}`,
          }}
        >
          <img src="" alt="" />
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Work;
