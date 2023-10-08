import React from 'react';
import './PortalNavBar.css';
import RadioArchiveLogo from '../../assets/RadioArchiveLogo.png';
import Dropdown from 'react-bootstrap/Dropdown';

const PortalNavBar = () => {
    return (
        <nav className="navbar">
            <a href="/" className="navbar-logo">
              <img src={RadioArchiveLogo}/>
              <span className='titleSpans' id = "radiology">Radiology</span><span className='titleSpans' id ="archive"> Archive</span>
            </a>
            <div className='portalContainer'>
              <div className="signupContainer">
                <a>Notification Bell</a>
              </div>
            </div> 
            <div className="loginContain">
              <Dropdown>
                  <Dropdown.Toggle variant="primary" id="loginDropdown">
                    ProfileIcon
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <h6>firstName lastName</h6>
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>Notifications</Dropdown.Item>
                    <Dropdown.Item href="http://localhost:5173">Log Out</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            </div>
          <div className="header">
            <h1><i>Welcome, !</i></h1>
          </div>
        </nav>
      );
    };

export default PortalNavBar