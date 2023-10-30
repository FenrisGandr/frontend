
import { useState } from "react";
const SecondOpinionSection = ({picture,doctorAndTitle, specialization, additionalText}) => {
    const [showAdditionalText, setShowAdditionalText] = useState(false);
  
    const toggleAdditionalText = () => {
      setShowAdditionalText(!showAdditionalText);
    };
    
    const wrapperStyle ={
        border: "1px solid gray",
        // margin: '4rem',
        overflow: 'hidden'
    }
    const initialContainer ={
        display: 'flex',
        borderBottom: showAdditionalText ? '1px solid gray': '',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const docImageStyle ={
        margin: '10px',
    }
    const doctorTitleStyle ={
        fontWeight: 'bold',
        marginTop: '10px'
    }
    const buttonStyle ={
        marginLeft: 'auto',
        color: 'grey',
        border: 'none',
        padding: '10px',
        fontSize: '16px',
        width: '30px',
        height: 'auto',
        cursor: 'pointer',
        display: 'center',
        borderRadius: '5px',
        marginRight: '2rem',  
    }
    const additionalTextStyle = {
        fontSize: '15px',
    }
    const additionalTextDiv={
      display: 'flex',
      flexDirection: 'column',
      margin: '10px'
    }
    return (
      <div style={wrapperStyle}>
       <div style={initialContainer}> 
            <div>
                <img src={picture} alt="Your Image" style={docImageStyle} />
            </div>
                <div>
                <p style={doctorTitleStyle}>{doctorAndTitle}</p>
                <p>Specialization: {specialization}</p>
            </div>
                <button style={buttonStyle} onClick={toggleAdditionalText}> {showAdditionalText ? '^':'v'} </button>
            
        </div>
        {showAdditionalText && (
          <div style={additionalTextDiv}>
          {additionalText.map((item, index)=>{
              return(<p>{item}</p>)
          }
          )}
          </div>
        )}
      </div>
    );
  };
  
  export default SecondOpinionSection;