import React from 'react';
import './NavBar.css';
import RadioArchiveLogo from '../../assets/RadioArchiveLogo.png';
import Dropdown from 'react-bootstrap/Dropdown';
const NavBar = () => {
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
                    Login
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/signin">Patient</Dropdown.Item>
                    <Dropdown.Item href="/signin">Physician</Dropdown.Item>
                    <Dropdown.Item href="/signin">Radiologist</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            </div>
              <div className="signupContainer">
                <span className='buttonText'>New User?</span>
                <a href="/Signup" className='btn btn-primary signup'>Sign up</a>
              </div>
            </div>  
        </nav>
      );
    };
export default NavBar