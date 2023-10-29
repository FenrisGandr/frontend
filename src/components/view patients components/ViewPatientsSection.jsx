import { useState } from "react";
const ViewPatientsSection = ({profileImage, patientName, dob, patientEmail, additionalText}) => {
    const [showAdditionalText, setShowAdditionalText] = useState(false);
    
    const toggleAdditionalText = () => {
        setShowAdditionalText(!showAdditionalText);
    };
    const wrapperStyle ={
        border: "1.5px solid grey",
        //margin: '.2rem',
        overflow: 'hidden'
    }
    const docImageStyle ={
        margin: '20px',
    }
    const doctorTitleStyle ={
        fontWeight: 'bold',
        marginTop: 'auto'
    }
    const initialContainer ={
        display: 'flex',
        borderBottom: showAdditionalText ? '1.5px solid gray': '',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const buttonStyle ={
        marginLeft: 'auto',
        color: 'white',
        border: '1px',
        padding: '10px',
        fontSize: '16px',
        width: '175px',
        height: '45px',
        cursor: 'pointer',
        display: 'center',
        borderRadius: '5px',
        marginRight: '2rem', 
        backgroundColor:'rgb(227,93,106',
    }
    const additionalTextStyle = {
        fontSize: '16px',
        marginTop: '10px',
        marginLeft: '10px',
    }    
    const additionalTextDiv={
        display: 'flex',
        flexDirection: 'column',
        margin: '10px',
    }
    return (
    <div style={wrapperStyle}>
    <div style={initialContainer}> 
         <div>
             <img src={profileImage} alt="Your Image" style={docImageStyle} />
         </div>
             <div>
             <p style={doctorTitleStyle}>{patientName}</p>
             <p>DOB: {dob} </p>
             <p>{patientEmail}</p>
         </div>
        <button style={buttonStyle} onClick={toggleAdditionalText}>{showAdditionalText ? 'View  ':'View '} </button>
        </div>
        {showAdditionalText && (
       <div style={additionalTextDiv}>
        <div>
        <p style={additionalTextStyle}>Medical Images: </p>
        </div>
         {additionalText.map((item, index)=> {
            if (item.includes(".png") || item.includes(".jpg") || item.includes(".jpeg") || item.includes(".gif")) {
            return (
            <img key={index} src={item} alt={`Image ${index}`} style={{ width: "200px", height: "auto", marginBottom: "10px" }} />
            );
            } 
            else {    
        return( <p key = {index}>{item}</p>)
            }
       })}

       </div>
     )}
   </div>

  );        
 };

export default ViewPatientsSection;