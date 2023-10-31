import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Banner from "./Banner";
import WebFooter from "./WebFooter";
import { useAuth } from "../contexts/AuthContext";

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
    gap: "35%",
  };

  const noteHeaderStyle = {
    border: "1px solid blue",
    backgroundColor: "lightblue",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  };

  const noteStyle = {
    padding: "50px",
    backgroundColor: "grey",
  };

  const opinionsHeaderStyle = {
    border: "1px solid red",
    backgroundColor: "pink",
  };

  const opinionStyle = {
    padding: "50px",
    backgroundColor: "grey",
  };

  return (
    <>
      <Banner text={"Medical Image Center"} />
      <div style={containerStyle}>
        <div>
          <img src={image.url} alt="Medical Image" />
        </div>
        <div>
          <div style={noteHeaderStyle}>
            Your physician notes:
            <button
              onClick={() => {
                setShowNote(!showNote);
              }}
            >
              {showNote ? "^" : "v"}
            </button>
          </div>
          {showNote &&
            (image.authors > 0 ? (
              image.authors.map((author) => {
                if (author.role === "PHYSICIAN") {
                  return (
                    <div key={author.uid} style={noteStyle}>
                      {author.note}
                    </div>
                  );
                }
              })
            ) : (
              <div style={opinionStyle}>No opinions</div>
            ))}

          <div style={opinionsHeaderStyle}>
            Second Opinions:
            <button
              onClick={() => {
                setShowOpinions(!showOpinions);
              }}
            >
              {showOpinions ? "^" : "v"}
            </button>
          </div>
          {showOpinions &&
            (image.authors && image.authors.length > 0 ? (
              image.authors.map((author, index) => {
                return (
                  <div key={author.uid} style={opinionStyle}>
                    <p>
                      Opinion {index + 1}: {author.note}
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
      <WebFooter />
    </>
  );
}
