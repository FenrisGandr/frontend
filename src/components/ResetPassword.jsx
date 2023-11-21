import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from "../constants";
import RadioArchiveLogo from '../assets/RadioArchiveLogo.png';
import './Form.css';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
     // API call to reset password
     fetch(API_URL + "/api/auth/reset-password", {
       method: "POST",
       headers: {"Content-Type": "application/json"},
       body: JSON.stringify({ email }),
     })
     .then(response => response.json())
     .then(response => {
       if (response.success) {
         // Show the email sent checkmark or navigate to a confirmation page
         console.log("Reset link sent to " + email);
         // You can also navigate to a different page or show a message here
       } else {
         // Handle the case where the response is not successful
         console.error("Error: ", response.message);
       }
     })
     .catch(err => console.error(err));
   };
 
  return (
    <div className="resetPasswordWrapper">
      <div className="resetPasswordContainer">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <h1>
              <img src={RadioArchiveLogo} alt="Radiology Archive Logo" />
              <span className="titleSpans" id="radiology">Radiology</span>
              <span className="titleSpans" id="archive">Archive</span>
            </h1>
          </div>
          <div className="form-row">
            <p>Please enter your account’s email address and we’ll send you an email with instructions to reset your password.</p>
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
            <button type="submit" className="form-button">Continue</button>
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

export default ResetPassword;
