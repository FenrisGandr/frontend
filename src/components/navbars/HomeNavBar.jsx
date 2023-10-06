import React from 'react';
import './HomeNavBar.css';
import RadioArchiveLogo from '../../assets/RadioArchiveLogo.png';
import Dropdown from 'react-bootstrap/Dropdown';
const HomeNavBar = () => {
    return (
        <nav className="navbar">
            <a href="/" className="navbar-logo">
              <img src={RadioArchiveLogo}/>
              <span className='titleSpans' id = "radiology">Radiology</span><span className='titleSpans' id ="archive"> Archive</span>
            </a>
            <div className='container'>
            <div className="loginContain">
              <span className="buttonText">Returning User?</span>
              <Dropdown>
                  <Dropdown.Toggle variant="primary" id="loginDropdown">
                    Log In
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/patientsignin">Patient</Dropdown.Item>
                    <Dropdown.Item href="/physiciansignin">Physician</Dropdown.Item>
                    <Dropdown.Item href="/radiologistsignin">Radiologist</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            </div>
              <div className="signupContainer">
                <span className='buttonText'>New User?</span>
                <a href="/signup" className='btn btn-primary signup'>Sign up</a>
              </div>
            </div>  
        </nav>
      );
    };
export default HomeNavBar