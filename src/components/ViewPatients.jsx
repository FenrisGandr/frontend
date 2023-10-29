// ViewPatients.js
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import WebFooter from "./WebFooter";
import ViewPatientsCenter from "./view patients components/ViewPatientsCenter";

function ViewPatients() {
  const firstDivStyle = {
    margin: "4rem",
  };
  const headerStyle = {
    color: "#0D6EFD",
  };
  const secondDivStyle = {
    margin: "5rem",
  };
  const buttonStyle = {
    width: "auto",
    height: "40px",
    backgroundColor: "rgb(227,93,106)",
    color: "white",
    borderRadius: "5px",
    fontSize: "16px",
    marginTop: "5rem",
    marginLeft: "15rem",
  };

  return (
    <>
      <Banner text="Patient Center" />

      <div style={firstDivStyle}>
        <h1 style={headerStyle}>Your Patients</h1>
        <div />
        <div />
        <div style={secondDivStyle}>
          <div style={secondDivStyle}>
            <ViewPatientsCenter />
          </div>
        </div>
        <Button as={Link} to="/dashboard" style={buttonStyle}>
          Back to Dashboard
        </Button>
      </div>
      <WebFooter />
    </>
  );
}

export default ViewPatients;
