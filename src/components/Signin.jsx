import React, { useState } from "react";
import "./Signpage.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPasswordLocally } from "../api.js";

function Signin() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    let email = input.email.toLowerCase().trim();
    let password = input.password;

    signInWithEmailAndPasswordLocally(email, password)
      .then((data) => {
        if (data.errors) {
          alert(data.errors[0].msg);
        } else {
          navigate("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <div class="border"></div>
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <h1>RadiologyArchive</h1>
        <h2>Sign In</h2>
        <div className="form-row">
          <div className="form-label">
            <label htmlFor="email">
              <span>Email</span>
            </label>
          </div>
          <input
            name="email"
            type="text"
            onChange={handleChange}
            value={input.email}
            required
            autoComplete="true"
          />
        </div>
        <div className="form-row">
          <div className="form-label">
            <label htmlFor="password">
              <span>Password</span>
            </label>
          </div>
          <input
            name="password"
            onChange={handleChange}
            value={input.password}
            type="password"
            required
            autoComplete="true"
          />
        </div>
        <div className="form-row">
          <div className="btn">
            {error ? <p>{error}</p> : null}
            <button title="Signin" aria-label="Signin" type="submit">
              Sign In
            </button>
          </div>
        </div>
      </form>
      <div className="option">
        <p>
          Don't have an account?{" "}
          <a onClick={() => navigate("/signup")}>Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Signin;
