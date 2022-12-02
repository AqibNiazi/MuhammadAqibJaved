import React, { useState } from "react";
import "./Counter.css";
const UserInput = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Age, setAge] = useState("");
  const [Address, setAddress] = useState("");
  const [showdata,setShowData]=useState(false);
  const handleClick = () => {
   setShowData(true);
  };

  const handleName = (params) => {
    setName(params.target.value);
  };
  const handleEmail = (params) => {
    setEmail(params.target.value);
  };
  const handleAge = (params) => {
    setAge(params.target.value);
  };
  const handleAddress = (params) => {
    setAddress(params.target.value);
  };
  return (
    <div className="userinput">
      <h2>User Form</h2>
      <input placeholder="Name" onChange={(name) => handleName(name)} />
      <input placeholder="Email" onChange={(email) => handleEmail(email)} />

      <input placeholder="Age" onChange={(age) => handleAge(age)} />

      <input
        placeholder="Address"
        onChange={(address) => handleAddress(address)}
      />

      <button onClick={() => handleClick()}>Click Me</button>
{
    showdata?(
        <ul className="list">
        <li>{Name}</li>
        <li>{Email}</li>
        <li>{Age}</li>
        <li>{Address}</li>

     </ul> 
    ):""
}
   

    </div>
  );
};

export default UserInput;
