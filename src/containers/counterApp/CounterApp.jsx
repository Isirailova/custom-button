import React, { useState } from "react";
import "./counterApp.style.css";
import CustomButton from "../../components/customButton/CustomButton";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const plusClick = () => {
    setCount(count + 1);
  };

  const minusClick = () => {
    setCount(count - 1);
  };

  const addClick = () => {
    setTotal(total + count);
    setCount(0);
  };

  const substractClick = () => {
    if (total > 0) {
      setTotal(total - count);
    } else {
      alert("You can't go down then Zero!");
    }
    setCount(0);
  };

  const multiplyClick = () => {
    setTotal(total * count);
    setCount(0);
  };
  return (
    <div className="counter">
      <CustomButton text="-" onClickHandler={minusClick} />
      <p>{count}</p>
      <CustomButton text="+" onClickHandler={plusClick} />
      <CustomButton text="ADD" onClickHandler={addClick} />
      <p>Total:{total}</p>
      <CustomButton text="-" onClickHandler={substractClick} />
      <CustomButton text="*" onClickHandler={multiplyClick} />
    </div>
  );
};

export default CounterApp;
