import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Banner from "./Banner";
import WebFooter from "./WebFooter";
import { useAuth } from "../contexts/AuthContext";
import DashboardSection from "./dashboard components/DashboardSection";

export default function ImageView() {
  const { state } = useLocation();
  const image = state.image;
  const [showNote, setShowNote] = useState(false);
  const [showOpinions, setShowOpinions] = useState(false);
  const [newNote, setNewNote] = useState("");
  const { role } = useAuth();

  function handleChange(event) {
    setNewNote(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Add your code to handle form submission here
    console.log("Note submitted:", newNote);
  }

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    // width:"50%",
    // height:'auto',
    gap: "15%",
    marginBottom: "10rem"
  };

  const noteHeaderStyle = {
    border: "1px solid #0080FF",
    backgroundColor: "#CFE2FF",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    width: "625px",
    height: "65px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  };


  const opinionsHeaderStyle = {
    border: "1px solid #FF0000",
    backgroundColor: "#F8D7DA",
    width: "625px",
    height: "65px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  };

  const opinionStyle = {
    padding: "50px",
    border: "1px solid grey",
    // backgroundColor: "grey",
  };
  
  const imageStyle={
    width: "600px",
    height: "auto",
    marginLeft: "40px"
  }

  const opinionWrapperStlye ={
    marginLeft: "5rem",
  }

  const introStyle ={
    color: '#0D6EFD',
    margin: '3rem'
  } 
  const buttonStyle= {
    marginLeft: "auto",
    color: "grey",
    border: "none",
    padding: "10px",
    fontSize: "16px",
    width: "30px",
    height: "auto",
    cursor: "pointer",
    display: "center",
    borderRadius: "5px",
    marginRight: "2rem",
    backgroundColor: 'transparent'
  }
  const divider = {
    height: '3px',
    width: '50%',
    backgroundColor: '#0D6EFD',
    marginTop: '150px',
    marginBottom: '50px',
    marginLeft:'5rem'
  }
  const spanStyle = {
    marginLeft: "100px",
    fontWeight: 'bold',
    fontSize: "17px"
  }
  return (
    <>
      <Banner text={"Medical Image Center"} />
      <h2 style={introStyle}>Your Medical Images</h2>

      <div style={containerStyle}>
        <div>
          <img style={imageStyle} src={image.url} alt="Medical Image" />
        </div>
        <div style={opinionWrapperStlye}>
          <div style={noteHeaderStyle} onClick={()=>setShowNote(!showNote)}>
            <span style={spanStyle}>Your physician notes:</span>
            <button style={buttonStyle}
              onClick={() => {
                setShowNote(!showNote);
              }}
            >
              {showNote ? "^" : "v"}
            </button>
          </div>
          {showNote &&
            (image.authors && image.authors.length > 0? (
              image.authors.map((author) => {
                if (author.role === "PHYSICIAN") {
                  return (
                    <div key={author.uid} style={opinionStyle}>
                      <p>{author.note}</p>
                      <span>By: {author.full_name}</span>
                    </div>

                  );
                }
              })
            ) : (
              <div style={opinionStyle}>No opinions</div>
            ))}

          <div style={opinionsHeaderStyle} onClick={()=>setShowOpinions(!showOpinions)}>
            <span style={spanStyle}>Radiologist Notes:</span>
            <button 
              style={buttonStyle}
              onClick={() => {
                setShowOpinions(!showOpinions);
              }}
            >
              {showOpinions ? "^" : "v"}
            </button>
          </div>
          {showOpinions &&
            (image.authors && image.authors.length > 1 ? (
              image.authors.map((author, index) => {
                if (author.role === "RADIOLOGIST")
                  return (
                    <div key={author.uid} style={opinionStyle}>
                      <p>
                        Opinion {index}: {author.note}
                      </p>
                      <span>By: {author.full_name}</span>
                    </div>
                  );
              })
            ) : (
              <div style={opinionStyle}>No opinions</div>
            ))}
        </div>
      </div>
      {role === "Radiologist" && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="note">Add notes:</label>
          <br />
          <input
            type="text"
            id="note"
            name="note"
            value={newNote}
            onChange={handleChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      )}

      {role === "Patient" && (
      
      <div>
        <div style={divider}></div>
       <DashboardSection 
       role={role}
       isLast={true}
       headerDescription={"Want a Second Opinion?"}
       paragraphDescription={"If you want a better understanding of your medical image, we provide a wide selection of radiologists for you! All you need to is select the radiologist that is right for you and they’ll be on their way to interpret your chosen image!"}
       buttonDescription={"Get a Second Opinion"}
       buttonLink={"/secondopinion"}
       />
       </div>
      )}
      <WebFooter />
    </>
  );
}
