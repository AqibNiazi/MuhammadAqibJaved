import "./Counter.css";
import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    // count++    try to modify state value like count +=value
setCount((prev) => prev + 1);
  };
  const Decrement = () => {
setCount((prev) => prev - 1);
  };
  const Reset = () => {
    setCount(0);
  };
  return (
    <div className="counter">
      <h2 className="heading">{count==0?"Zero":count}</h2>
      <button className="buttonStyle" onClick={() => Increment()}>
        +
      </button>
      <button className="buttonStyle" onClick={() => Decrement()}>
        -
      </button>
      <button className="buttonStyle" onClick={() => Reset()}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
