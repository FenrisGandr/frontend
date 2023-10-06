import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { firebaseAuth } from "../../auth.js";
import HomeNavBar from "../navbars/HomeNavBar.jsx";
import docvisit from '../../assets/docvisit.png'
import doctor1 from '../../assets/doctor1.png'
import doctor2 from '../../assets/doctor2.png'
import doctor3 from'../../assets/doctor3.png'
import doctor4 from'../../assets/doctor4.png'
import doctor5 from'../../assets/doctor5.png'
import doctor6 from'../../assets/doctor6.png'
import WebFooter from "../WebFooter.jsx";

import './Home.css';
function Home() {
  const [user, setUser] = useState();

  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) setUser(user);
  });

  useEffect(() => {}, [user]);

  return (
    <div>
      <HomeNavBar/>
      <div className="hero">
        <div className="leftContainer">
          <h1>Get your medical scan interpreted today.</h1>
          <p>We provide a variety selection of radiologists for you to choose from. <br/> View your physician's notes and get a second opinion.</p>
          <a href="/Signup" className='btn btn-primary signup'>Sign Up</a>
        </div>
        <img id = "xrayPlaceholder"src={docvisit}/>
      </div>
      <div className="radiologistspictures">
        <div className="headertext">
        <h3>Meet Our Radiologists!</h3>
        </div>
        <div className="rows">
          <ul>
            <li className="doctorcontainer">
              <img src={doctor1}  className="doctorimage"/>
              <div className="doctordetails">
              <span className ="doctornames">Dr. Allison Mitchel</span>
              <span>Specialization: Diagnostic Radiology</span> 
              </div>
            </li>
            <li className="doctorcontainer">
              <img src={doctor2} className="doctorimage"/>
              <div className="doctordetails">
              <span className ="doctornames">Dr. Benjamin Patel</span>
              <span>Specialization: Diagnostic Radiology</span>
              </div>
              </li>
            <li className="doctorcontainer">
              <img src={doctor3} className="doctorimage"/>
              <div className="doctordetails">
              <span className ="doctornames">Dr. Emily Rodriguez</span>
              <span>Specialization: Diagnostic Radiology</span>
              </div>
            </li>
            </ul>
            <ul>
            <li className="doctorcontainer">
              <img src={doctor4} className="doctorimage"/>
              <div className="doctordetails">
              <span className ="doctornames">Dr. James Anderson</span>
              <span>Specialization: Diagnostic Radiology</span>
              </div>
            </li>
            <li className="doctorcontainer">
            <img src={doctor5} className="doctorimage"/>
              <div className="doctordetails">
              <span className ="doctornames">Dr. Olivia Chang</span>
              <span>Specialization: Diagnostic Radiology</span>
              </div>
            </li>
            <li className="doctorcontainer">
              <img src={doctor6} className="doctorimage"/>
              <div className="doctordetails">
              <span className ="doctornames">Dr. Michael Nguyen</span>
              <span>Specialization: Diagnostic Radiology</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="card">
        {user && <p>Welcome, {user.email}</p>}
        <a href="/signin">Go to signin screen</a>
      </div>
      <WebFooter />
    </div>
  );  
}

export default Home;
