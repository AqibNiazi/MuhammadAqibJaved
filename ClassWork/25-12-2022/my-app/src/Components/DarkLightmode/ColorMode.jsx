import React, { useState } from "react";

const ColorMode = () => {
  const [bg, setBg] = useState("#fff");
  const ChangeBackgroundDark = () => {
    setBg("#000");
  };
  const ChangeBackgroundWhite = () => {
    setBg("#fff");
  };
  return (
    <div
      className="col-md-12 d-flex justify-content-center align-items-center"
      style={{ height: "80vh", overflow: "hidden", backgroundColor: `${bg}` }}
    >
      <button  className="ms-3 bg-dark text-white" onClick={() => ChangeBackgroundDark()}>
        Dark
      </button>
      <button
      className="ms-3 bg-light text-dark"
        // style={{ color:"black" ,backgroundColor:"white", border:"2px solid"}}
        onClick={() => ChangeBackgroundWhite()}
      >
        Light
      </button>
    </div>
  );
};

export default ColorMode;
