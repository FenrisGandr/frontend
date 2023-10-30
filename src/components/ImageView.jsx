import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Banner from './Banner';
import WebFooter from './WebFooter';
import { useAuth } from '../contexts/AuthContext';

export default function ImageView() {
  const { state } = useLocation();
  const image = state.image;
  const [showNote, setShowNote] = useState(false);
  const [showOpinions, setShowOpinions] = useState(false);
  const [newNote, setNewNote] = useState('');
  const { role } = useAuth();

  function handleChange(event) {
    setNewNote(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Add your code to handle form submission here
    console.log('Note submitted:', newNote);
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '35%'
  }

  const noteHeaderStyle = {
    backgroundColor: 'blue',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  }

  const noteStyle = {
    padding: '50px',
    backgroundColor: 'grey',    
  }

  const opinionsHeaderStyle = {
    backgroundColor: 'red',
  }

  const opinionStyle = {
    padding: '50px',
    backgroundColor: 'grey',
  }

  return (
    <>
      <Banner text={"Medical Image Center"} />
      <div style={containerStyle}>
        <div>
          <img src={image.img} alt="Medical Image" />
        </div>
        <div>
          <div style={noteHeaderStyle}>
            Physician Note:
            <button onClick={() => { setShowNote(!showNote) }}>
              {showNote ? '^' : 'v'}
            </button>
          </div>
          {showNote && <div style={noteStyle}>{image.note}</div>}

          <div style={opinionsHeaderStyle}>
            Second Opinions:
            <button onClick={() => { setShowOpinions(!showOpinions) }}>
              {showOpinions ? '^' : 'v'}
            </button>
          </div>
          {
            showOpinions &&
            (image.second_opinions && image.second_opinions.length > 0
              ? image.second_opinions.map((opinion, index) => {
                  return (
                    <div key={index} style={opinionStyle}>
                      Opinion {index + 1}: {opinion}
                    </div>
                  );
                })
              : <div style={opinionStyle}>No opinions</div>)
          }
        </div>
      </div>
      {role === 'Radiologist' && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="note">Add notes:</label><br/>
          <input type="text" id="note" name="note" value={newNote} onChange={handleChange}/><br/>
          <input type="submit" value="Submit"/>
        </form>
      )}
      <WebFooter />
    </>
  )
}
