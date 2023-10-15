import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { useLocation, useNavigate } from "react-router-dom";
import RadioArchiveLogo from "../assets/RadioArchiveLogo.png";
import person from "../assets/person.png";
import { useAuth } from "../contexts/AuthContext";
import "./NavBar.css";

const NavBar = () => {
  const { role, user, signout } = useAuth();
  const [showTitle, setShowTitle] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const roleColor = (role) => {
    switch (role) {
      case "Patient":
        return "#479f76";
      case "Physician":
        return "#0D6EFD";
      case "Radiologist":
        return "#DC3545";
      default:
        return "#479f76";
    }
  };

  const backgroundStyle = {
    backgroundColor: roleColor(role),
  };
  const titleStyle = {
    fontSize: "2rem",
    color: roleColor(role),
  };
  const DropdownLogo = {
    width: "2rem",
    innerHeight: "2rem",
  };
  const boldName = {
    fontWeight: "500",
  };

  React.useEffect(() => {
    if (location.pathname === "/signin" || location.pathname === "/signup") {
      return null;
    }

    if (location.pathname === "/dashboard") {
      setShowTitle(true);
    }
  }, [location.pathname]);

  const LoggedOutDropdown = () => {
    return (
      <div className="container">
        <div className="loginContain">
          <span className="buttonText">Returning User?</span>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="loginDropdown">
              Log In
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  navigate("/signin", { state: { role: "Patient" } });
                }}
              >
                Patient
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  navigate("/signin", { state: { role: "Physician" } });
                }}
              >
                Physician
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  navigate("/signin", { state: { role: "Radiologist" } });
                }}
              >
                Radiologist
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="signupContainer">
          <span className="buttonText">New User?</span>
          <a href="/signup" className="btn btn-primary signup">
            Sign up
          </a>
        </div>
      </div>
    );
  };

  const LoggedInDropdown = () => {
    return (
      <>
        {showTitle && (
          <Nav className="mr-auto">
            <h2>
              <span style={titleStyle}>{role}</span> Portal
            </h2>
          </Nav>
        )}
        <Dropdown align="end" style={{ marginRight: "50px" }}>
          <Dropdown.Toggle style={backgroundStyle} id="loginDropdown">
            <img src={person} style={DropdownLogo} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.ItemText style={boldName}>
              {user.displayName || user.email}
            </Dropdown.ItemText>
            <Dropdown.Item href="/dashboard">Profile</Dropdown.Item>
            <Dropdown.Item href="TODO" disabled={true}>
              Notifications
            </Dropdown.Item>
            <Dropdown.Item onClick={signout}>Log Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  };

  return (
    <Navbar className="navbar">
      <Navbar.Brand>
        <a href="/" className="navbar-logo">
          <img src={RadioArchiveLogo} />
          <span className="titleSpans" id="radiology">
            Radiology
          </span>
          <span className="titleSpans" id="archive">
            {" "}
            Archive
          </span>
        </a>
      </Navbar.Brand>
      {user ? <LoggedInDropdown /> : <LoggedOutDropdown />}
    </Navbar>
  );
};
export default NavBar;
