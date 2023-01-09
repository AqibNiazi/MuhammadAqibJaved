import React, { useState } from "react";
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
    confirm: "",
    length: "",
    allfields: "",
  });
  const handleSubmit = () => {
    if (!email || !password || !confirmPassword) {
      setError({ allfields: "All fields must be filled." });
    } else if (!email.includes("@")) {
      setError({ email: "Email must contain @ symbol." });
    } else if (password !== confirmPassword) {
      setError({
        confirm: "password and confirm password must be same",
      });
    } else if (password.length !== 8 && confirmPassword.length !== 8) {
      setError({
        length: "password and confirm password must have same length",
      });
    } else {
      setError({
        email: "",
        password: "",
        confirm: "",
        length: "",
        allfields: "",
      });
      setMessage("Form Submitted Successfully");
    }
  };

  return (
    <div>
      <div className="col-md-6 mx-auto">
        <div class="mb-3 mt-3">
          <input
            type="text"
            class="form-control mt-2"
            value={email}
            id="email"
            placeholder="Enter email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            class="form-control mt-2"
            value={password}
            id="password"
            placeholder="Enter password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            class="form-control mt-2"
            value={confirmPassword}
            id="confirm_Password"
            placeholder="Enter password again"
            name="confirm_Password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="col-md-6 mx-auto mt-4">
      {error.email && <p>{error.email}</p>}
      {error.password && <p>{error.password}</p>}
      {error.confirm && <p>{error.confirm}</p>}
      {error.length && <p>{error.length}</p>}
      {error.allfields && <p>{error.allfields}</p>}
      {message && <p>{message}</p>}
      </div>
  
    </div>
  );
};

export default Form;
