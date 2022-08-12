import React from "react";

const Button = ({ className, text }) => {
  return (
    <div className={className}>
      <button>{text}</button>
    </div>
  );
};

export default Button;
