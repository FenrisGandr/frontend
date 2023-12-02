import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../constants";
import RadioArchiveLogo from "../assets/RadioArchiveLogo.png";
import checkmark from "../assets/checkmark.png";
import "./Form.css";
import { Container, Row, Col, Image } from 'react-bootstrap';

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to reset password
    fetch(API_URL + "/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          // Show the email sent checkmark or navigate to a confirmation page
          setSuccess(true);
          // You can also navigate to a different page or show a message here
        } else {
          // Handle the case where the response is not successful
          console.error("Error: ", response.errors[0].msg);
        }
      })
      .catch((err) => console.error(err));
  };
  const formStyle = {
    width: "16rem",
  };

  const loginButtonStyle = {
    backgroundColor: "#0D6EFD",
    borderRadius: "3px",
    width: "16rem",
    border: "none",
    color: "white",
    height: "35px",
    marginTop: "1rem",
    marginBottom: "1.25rem",
  };

  function LogoHeader() {
    return (
      <h1>
        <Link className="text-decoration-none" to="/">
          <img src={RadioArchiveLogo} alt="Radiology Archive Logo" />
          <span className="titleSpans" id="radiology">
            Radiology
          </span>
          <span className="titleSpans" id="archive">
            Archive
          </span>
        </Link>
      </h1>
    );
  }

  function Success() {
    return (
      <div className="container-lg d-flex flex-column justify-content-center align-items-center my-3">
        <LogoHeader />
        <h2 className="fw-bold text-primary my-4">Email Sent!</h2>
        <img src={checkmark} className="checkmark my-4" alt="checkmark"></img>
        <p className="mt-3 mb-5">
          Please check your email and follow the instructions to reset your
          password.
        </p>
        <Link as="button" to="/" className="btn btn-primary w-50">
          Back to Home Page
        </Link>
      </div>
    );
  }

  if (success) {
    return <Success />;
  } else {
    return (
      <div className="resetPasswordWrapper my-3">
        <div className="resetPasswordContainer">
          <form className="form" onSubmit={handleSubmit}>
            <LogoHeader />
            <div className="form-row" />
            <div className="form-row">
              <p>
                Please enter your account’s email address and we’ll send you an
                email with instructions to reset your password.
              </p>
            </div>
            <div className="form-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="form-row">
              <button type="submit" className="form-button">
                Continue
              </button>
            </div>
          </form>
          <div className="option">
            <span className="titleSpans">New User?</span>
            <button onClick={() => navigate("/signup")}>Sign Up</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
