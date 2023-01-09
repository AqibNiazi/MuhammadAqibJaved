import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { formSlice } from "../Form/FormSlice";
const ReduxForm = () => {
  const [userData, setuserData] = useState({
    email:"",
    password:"",
    confirmPassword:""
  })
 const dispatch=useDispatch();
  const handleSubmit = () => {
dispatch(formSlice.actions.dataFunction(userData))
  };

  return (
    <div>
      <div className="col-md-6 mx-auto">
        <div class="mb-3 mt-3">
          <input
            type="text"
            class="form-control mt-2"
            value={userData.email}
            id="email"
            placeholder="Enter email"
            name="email"
            onChange={(e) => setuserData({...userData,email:e.target.value})}
          />

          <input
            type="password"
            class="form-control mt-2"
            value={userData.password}
            id="password"
            placeholder="Enter password"
            name="password"
            onChange={(e) => setuserData({...userData,password:e.target.value})}
          />

          <input
            type="password"
            class="form-control mt-2"
            value={userData.confirmPassword}
            id="confirm_Password"
            placeholder="Enter password again"
            name="confirm_Password"
            onChange={(e) => setuserData({...userData,confirmPassword:e.target.value})}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>

  
    </div>
  );
};

export default ReduxForm;
