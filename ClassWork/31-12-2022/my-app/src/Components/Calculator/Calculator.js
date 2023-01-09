import React, { useState } from "react";

const Calculator = () => {
  const Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [totalResult, setTotalResult] = useState("No result yet");

  const firstNum = (num) => {
    setFirstNumber(num);
    console.log("first num:", num);
  };
  const secondNum = (num) => {
    setSecondNumber(num);
    console.log("Second num:", num);

  };
  const Additon = () => {
    setTotalResult(firstNumber + secondNumber);
  };
  const Subtraction = () => {
    setTotalResult(firstNumber - secondNumber);
  };
  const Clear = () => {
    setTotalResult("No result yet");
    setFirstNumber(0);
    setSecondNumber(0);
  };
  return (
    <div className="container">
      <div className="d-inline-flex flex-row mt-4">
        <span className="fw-bolder">Number 1 :</span>
        {Numbers.map((elem) => {
          return (
            <button
              className="btn btn-primary ms-3"
              key={elem}
              value={elem}
              onClick={() => firstNum(elem)}
            >
              {elem}
            </button>
          );
        })}
      </div>
      <div className="d-inline-flex flex-row mt-4">
        <span className="fw-bolder">Number 2 :</span>
        {Numbers.map((elem) => {
          return (
            <button
              className="btn btn-secondary ms-3"
              key={elem}
              value={elem}
              onClick={() => secondNum(elem)}
            >
              {elem}
            </button>
          );
        })}
      </div>
      <br />
      <div className="d-inline-flex flex-row mt-4">
        <span className="fw-bolder">Action : </span>
        <button className="btn btn-success ms-3" onClick={Additon}>
          +
        </button>
        <button className="btn btn-warning ms-3" onClick={Subtraction}>
          -
        </button>
        <button className="btn btn-danger ms-3" onClick={Clear}>
          Clear
        </button>
      </div>
      <div>Result :{totalResult}</div>
    </div>
  );
};

export default Calculator;
