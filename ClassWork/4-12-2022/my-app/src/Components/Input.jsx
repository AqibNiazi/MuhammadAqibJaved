import React from "react";
import "../App.css";

const Input = ({ placeholder, method, value }) => {
  return (
    <>
      <input
        className="form-control my-2"
        placeholder={placeholder}
        value={value}
        onChange={(e) => method(e.target.value)}
      />
    </>
  );
};

export default Input;
