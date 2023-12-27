import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const baseURL = "https://survey-oy92.onrender.com";

const Signup = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${baseURL}/register`, {
        fullName,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        Navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ maxWidth: "630px", paddingTop: "10px" }}
    >
      <div className="col-md-6 w-100 ">
        <br />
        <h1 className="text-center">Create an Account</h1>
        <br />
        <form onSubmit={handleSubmit}>
          {/* ... Form fields  ... */}

          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              <h6>Full Name</h6>
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              style={{ borderColor: "#999999" }}
              value={fullName}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Full name"
              required
            />
          </div>

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
              placeholder="Email"
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
            className="btn btn-primary d-block mx-auto w-100"
            style={{ backgroundColor: "#2FA551", border: "none" }}
          >
            Submit
          </button>
          <p className="mt-3 text-center">
            <h6>
              {" "}
              Already have an account?{" "}
              <a href="/Login" style={{ color: "#E7319D" }}>
                Sign in
              </a>
            </h6>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
