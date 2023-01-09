import React from "react";
import { useSelector } from "react-redux";

const UserData = () => {
  const userData = useSelector((state) => state.form.formData)
  console.log(userData);
  return (
    <div className="col-md-8 mx-auto mt-5">
   {userData.map((item)=>(
    <ul  class="list-group mt-2">
        <li  class="list-group-item bg-info">{item.email}</li>
        <li  class="list-group-item bg-secondary">{item.password}</li>
        <li  class="list-group-item bg-info">{item.confirmPassword}</li>
      </ul>
   ))}
    </div>
  );
};

export default UserData;
