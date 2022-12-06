import React, { useState } from "react";
import ShowData from "./ShowData";
import AppInput from "./AppInput";
import RadioButton from "./RadioButton";
const TaskForm = () => {
  const [devName, setDevName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [feedback, setFeedback] = useState("");
  const [Satisfied, setSatisfied] = useState(false);
  const [showdata, setShowData] = useState(false);
  const handleClick = () => {
    setShowData(true);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <form className="col-md-6">
          <AppInput
            label={"DevName"}
            state={devName}
            setState={setDevName}
            type="text"
            id="DevName"
            placeholder="Enter DevName"
            name="DevName"
          />
          <AppInput
            label="User Name"
            state={userName}
            setState={setUserName}
            type="text"
            id="UserName"
            placeholder="Enter UserName"
            name="UserName"
          />
          <AppInput
            label="Email"
            state={email}
            setState={(params) => setEmail(params)}
            type="email"
            id="email"
            placeholder="Enter email"
            name="email"
          />
          <AppInput
            label="Password"
            state={password}
            setState={setPassword}
            type="password"
            id="pwd"
            placeholder="Enter Password"
            name="pwd"
          />
          <AppInput
            label="Address"
            state={address}
            setState={setAddress}
            type="text"
            id="Address"
            placeholder="Enter Address"
            name="Address"
          />
          <div class="mb-3 mt-3">
            <label for="Feedback">Feedback:</label>
            <textarea
              class="form-control"
              rows="5"
              id="Feedback"
              name="text"
              placeholder="More than two lines"
              value={feedback}
              onChange={(params) => setFeedback(params.target.value)}
            ></textarea>
          </div>
          <label for="radio" class="form-label">
            Satisfied
          </label>
          <RadioButton
            state={Satisfied}
            setState={(paras) => setSatisfied(paras)}
          />
          <div class="mb-3 mt-3 mx-auto">
            <button class="btn btn-primary" type="button" onClick={handleClick}>
              Submit
            </button>
          </div>
        </form>
        {showdata ? (
          <ShowData
            devName={devName}
            userName={userName}
            email={email}
            password={password}
            address={address}
            feedback={feedback}
            isSatisfied={Satisfied}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TaskForm;
