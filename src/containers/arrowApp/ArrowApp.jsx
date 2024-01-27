import React, { useState } from "react";
import CustomButton from "../../components/customButton/CustomButton";
import "./arrowApp.style.css";

const ArrowApp = () => {
  const [isUp, setIsUp] = useState(true);

  const upClick = () => {
    setIsUp(true);
  };

  const downClick = () => {
    setIsUp(false);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <CustomButton text="up" onClickHandler={upClick} />
        <CustomButton text="down" onClickHandler={downClick} />
      </div>
      <div className="arrow-box">
        <p>{isUp ? "⬆️" : "⬇️"}</p>
      </div>
    </div>
  );
};

export default ArrowApp;
