import React, { useState } from "react";
const Score = () => {
   let number= localStorage.getItem("counter");
   
  const [count, setCount] = useState(number);

  const Increment = () => {
    // count++    try to modify state value like count +=value
    let num = count;
    num++;
    setCount(num);
    localStorage.setItem("counter",num);
  };
  const Decrement = () => {
    let num = count;
    num--;
    setCount(num);
    localStorage.setItem("counter",num);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "100vh" }}
    >
      <h2 className="heading">Your Score :{count}</h2>
      <button className="btn btn-primary" onClick={() => Increment()}>
        +
      </button>
      <button className="btn btn-secondary" onClick={() => Decrement()}>
        -
      </button>
    </div>
  );
};

export default Score;
