import React,{useState} from "react";

const Colors = () => {
  const colors = [
    {
      id: 1,
      colorname: "Cyan",
      colorCode: "#00FFFF",
    },
    {
      id: 2,
      colorname: "black",
      colorCode: "#000000",
    },
    {
      id: 3,
      colorname: "Purple",
      colorCode: "#800080",
    },
    {
      id: 4,
      colorname: "blue",
      colorCode: "#0000FF",
    },
    {
      id: 5,
      colorname: "red",
      colorCode: "#FF0000",
    },
    {
      id: 6,
      colorname: "Gray",
      colorCode: "#808080",
    }
  ];
  const [color, setColor] = useState("#fff");
  const changeBackground=(color)=>{
    setColor(color)
  }
  return (
    <div className="section" style={{backgroundColor:`${color}`,height:"90vh"}}>
      <div className="row">
      {colors.map((color) => {
        return (

          <div
            className="col-md-4 gap-3 d-flex justify-content-center align-items-center text-white"
            style={{
              backgroundColor: `${color.colorCode}`,
              height: "200px",
              border: "4px solid white",
              cursor:"pointer"
            }}

            onClick={()=>changeBackground(color.colorCode)}
          
            key={color.colorname}
          >
            {color.colorname}
          </div>
        );
      })}
    </div>
    </div>
    
  );
};

export default Colors;
