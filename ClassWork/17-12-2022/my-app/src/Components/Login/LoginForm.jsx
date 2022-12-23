import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  provider,
} from "../Utilities/Config";
const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const SignUp = async (event) => {
    event.preventDefault();
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (user) {
      navigate("/Login");
    }
  };

  const Login = async (event) => {
    event.preventDefault();
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    if (user) {
      navigate("/Login");
    }
  };

  const GoogleLogin = async (event) => {
    event.preventDefault();
    const res = await signInWithPopup(auth, provider);
    console.log(res);
  };

  return (
    <div className="main-body">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true" className="formlabel">
              Sign up
            </label>
            <input
              type="text"
              name="txt"
              placeholder="User name"
              required=""
              className="formInput"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required=""
              className="formInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              className="formInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={SignUp} className="formbutton">
              Sign up
            </button>
          </form>
        </div>

        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true" className="formlabel">
              Login
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required=""
              className="formInput"
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required=""
              className="formInput"
            />
            <button type="submit" onClick={Login} className="formbutton">
              Login
            </button>
            <button onClick={GoogleLogin} className="formbutton">
              Google Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
