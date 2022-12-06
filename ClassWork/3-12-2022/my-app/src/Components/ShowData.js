import React from "react";
const ShowData = (props) => {
  console.log(props.isSatisfied);
  return (
    <div className="col-md-6">
      <ul>
        <li>Dev Name :{props.devName}</li>
        <li>User Name :{props.userName}</li>
        <li>Email :{props.email}</li>
        <li>password :{props.password}</li>
        <li>Address :{props.address}</li>
        <li>Feedback :{props.feedback}</li>
        <li>Satisfied :{props.isSatisfied ? "Satisfied": "NotSatisfied"}</li>
      </ul>
    </div>
  );
};

export default ShowData;
