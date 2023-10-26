import React from "react";
import SecondOpinionBanner from "./second opinion components/SecondOpinionBanner";
import WebFooter from "./WebFooter";
import { useAuth } from "../contexts/AuthContext";
import SecondOpinionCenter from "./second opinion components/SecondOpinionCenter";
function SecondOpinion(){

const firstDivStyle={
    margin: '3rem',
}
const headerStyle = {
    color: '#0D6EFD',
}
const headerParagraphStlye = {
    fontWeight: 'bold'
}
const secondDivStyle={
    margin: '5rem',
}
const buttonStyle = {
    width: '165px',
    height: '50px',
    backgroundColor: '#479F76',
    color: 'white',
    borderRadius: '5px',
    fontSize:'20px',
    marginTop: '2rem',
    marginLeft: '3rem'
}
const signupButtonStyle={
    width: '165px',
    height: '50px',
    marginTop: '2rem',
    fontSize:'20px',
    marginLeft: '3rem',
}
const selectContainer = {
    marginTop: '3rem',
    marginLeft: '3rem'
}


const { user, role } = useAuth();

return<>
    <SecondOpinionBanner/>
    <div style={firstDivStyle}>
        <h2 style={headerStyle}>Our Radiologists!</h2>
        <br></br>
        <p style={headerParagraphStlye}>Please go over which radiologist below best matches your needs.</p>
    </div>
    <div style={secondDivStyle}>
        <SecondOpinionCenter />
    </div>
    <div style={secondDivStyle}>

        {role === "Patient" ? 
        <form action="" >
            <h4>Select the radiologist that is best for You!</h4>
            <div style={selectContainer}>
                <select>
                    <option value="" disabled selected>Your radiologist</option>
                    <option value="">Dr. Allison Mitchell</option>
                    <option value="">Dr. Benjamin Patel</option>
                    <option value="">Dr. Emily Rodriguez</option>
                    <option value="">Dr. James Anderson</option>
                    <option value="">Dr. Olivia Chang</option>
                    <option value="">Dr. Michael Nguyen</option>
                </select>
            </div>
            <button style={buttonStyle}>Go to Payment</button>
        </form>
         : <></>}
        
        {user ? <></>:
            <a href="signup">
                <button className="btn btn-primary" style={signupButtonStyle}>Sign up here</button>
             </a>}
         



       
    </div>
    <WebFooter/>
    
</>
}

export default SecondOpinion;