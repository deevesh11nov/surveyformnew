import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const baseURL = "https://survey-oy92.onrender.com";

const SurveyForm = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Gender, setGender] = useState("");
  const [Nationality, setNationality] = useState("");
  const [Address, setAddress] = useState("");
  const [Message, setMessage] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${baseURL}/surveyform`, {
        Name,
        Email,
        Phone,
        Gender,
        Nationality,
        Address,
        Message,
      })
      .then((result) => {
        console.log(result);
        Navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="container d-flex justify-content-center pb-2 align-items-center"
      style={{ maxWidth: "630px", paddingTop: "10px" }}
    >
      <div className="col-md-6 w-100 ">
        <br />
        <h1 className="text-center">Survey Form</h1>
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
              value={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              required
            />
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="Gender">
                <h6>Gender</h6>
              </label>
              <select
                id="inputState"
                className="form-select"
                value={Gender}
                onChange={(e) => setGender(e.target.value)}
                style={{ borderColor: "#999999" }}
              >
                <option selected>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="col">
              <label htmlFor="nationality">
                <h6>Nationality</h6>
              </label>
              <select
                id="inputState"
                className="form-select"
                value={Nationality}
                onChange={(e) => setNationality(e.target.value)}
                style={{ borderColor: "#999999" }}
              >
                <option selected>Select nationality</option>
                <option>India</option>
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>Germany</option>
                <option>France</option>
                <option>Japan</option>
                <option>Brazil</option>
                <option>South Africa</option>
              </select>
            </div>
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
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              <h6>Phone Number</h6>
            </label>
            <input
              type="number"
              className="form-control"
              id="Phone no."
              name="Phone no."
              min={0}
              style={{ borderColor: "#999999" }}
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone no."
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              <h6>Address</h6>
            </label>
            <input
              type="text"
              className="form-control"
              id="Address"
              name="Address"
              style={{ borderColor: "#999999" }}
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              <h6>Message</h6>
            </label>
            <textarea
              type="text"
              id="Message"
              name="Message"
              className="form-control"
              style={{ borderColor: "#999999" }}
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary d-block mx-auto w-100"
            style={{ backgroundColor: "#2FA551", border: "none" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SurveyForm;
