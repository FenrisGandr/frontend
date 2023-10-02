import { AuthErrorCodes, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../auth";

function Signup() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    let email = input.email.toLowerCase().trim();
    let password = input.password;

    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((_userCredential) => {
        alert("Account created successfully!");
        setTimeout(() => {
          navigate("/signin");
        }, 1000);
      })
      .catch((err) => {
        if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
          setError("The password is too weak.");
        } else if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
          setError("The email address is already in use.");
        } else {
          console.log(err.code);
          alert(err.code);
        }
      });
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
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
              Sign Up
            </button>
          </div>
        </div>
      </form>
      <div className="option">
        <p>
          Have an account? <a onClick={() => navigate("/signin")}>Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
