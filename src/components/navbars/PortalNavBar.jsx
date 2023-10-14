import React from 'react';
import './PortalNavBar.css';
import RadioArchiveLogo from '../../assets/RadioArchiveLogo.png';
import person from '../../assets/person.png'
import Dropdown from 'react-bootstrap/Dropdown';

const PortalNavBar = ({title, titleColor}) => {


  //depending on the user context we could change the color... hopefully

  const titleStyle = {
    fontSize: '2rem',
    color: titleColor,
  }
  const customButtonStyle = {
    backgroundColor: titleColor,
  };
  const DropdownLogo = {
    width: '2rem',
    innerHeight: '2rem',
  }
    return (
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          <img src={RadioArchiveLogo}/>
          <span className='titleSpans' id = "radiology">Radiology</span><span className='titleSpans' id ="archive"> Archive</span>
        </a>
        <span style={titleStyle}>
        {title}
        </span>
        
        <div className='container'>
            <div className="loginContain">
              <Dropdown>
                  <Dropdown.Toggle style={customButtonStyle} id="loginDropdown" >
                    <img src={person}  style={DropdownLogo}/>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/filler">Profile</Dropdown.Item>
                    <Dropdown.Item href="/filler">Notifications</Dropdown.Item>
                    <Dropdown.Item href="/filler">Log Out</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            </div>
        </div>  
      </nav>
      );
    };

export default PortalNavBar