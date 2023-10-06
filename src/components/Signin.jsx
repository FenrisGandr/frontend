import React, { useState } from "react";
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

  const loginButtonStyle={
    backgroundColor: '#0D6EFD',
    borderRadius: '3px',
    width:'190px',
    border: 'none',
    color: 'white',
    height: '35px',
    marginBottom: '75px',
    marginTop: '25px'
  };

  const boldSpan={
    color: 'black',
    fontWeight: '600'
  };

  return (
    <div>
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-label">
            <label htmlFor="email">
              <span style={boldSpan}>Email</span>
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
              <span style={boldSpan}>Password</span>
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
          <div>
            {error ? <p>{error}</p> : null}
            <button style={loginButtonStyle} title="Signin" aria-label="Signin" type="submit">
              Log In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signin;
