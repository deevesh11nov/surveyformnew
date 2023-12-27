import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const baseURL = "https://survey-oy92.onrender.com";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${baseURL}/login`, { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          Navigate("/surveylist");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ maxWidth: "630px", paddingTop: "15px" }}
    >
      <div className="col-md-6 w-100 ">
        <br />
        <h1 className="text-center">Sign in</h1>
        <br />
        <p style={{ color: "red" }}>Note: Only Admin can Login</p>
        <form onSubmit={handleSubmit}>
          {/* ... Form fields */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <h6>Email</h6>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              style={{ borderColor: "#999999" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username or email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <h6>Password</h6>
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              style={{ borderColor: "#999999" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary d-block mx-auto w-100 "
            style={{ backgroundColor: "#2FA551", border: "none" }}
          >
            Sign In
          </button>

          {/* Email: 123@gmail.Com
          password: 123 */}
        </form>
        <br />
        <a href="/">Back to form</a>
      </div>
    </div>
  );
};

export default Login;
