import React from "react";
import "./customInput.style.css";

const CustomInput = ({ onChangeHandler, type, value }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChangeHandler}
      placeholder="0"
    ></input>
  );
};

export default CustomInput;
