import React from "react";

const Button = ({ method }) => {
  return (
    <>
      <button onClick={() => method()} className="btn btn-primary">
        Add
      </button>
    </>
  );
};

export default Button;
