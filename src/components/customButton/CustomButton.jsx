import React from "react";
import "./customButton.style.css";

const CustomButton = ({ onClickHandler, text }) => {
  return (
    <button className="custom-button" onClick={onClickHandler}>
      {text}
    </button>
  );
};

export default CustomButton;
