import React from 'react'
import Banner from './Banner'
import spineXray from '../assets/spine-xray.png'
import WebFooter from './WebFooter'
import { useNavigate } from "react-router-dom";


export default function ImageLibrary() {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      img: spineXray,
      physician: 'Dr. Joe John',
      note: "physician notes here",
      second_opinions: []
    },
    {
      id: 2,
      img: spineXray,
      physician: 'Dr. Joe John Bruh',
      note: "second physician notes here",
      second_opinions: ["bones look good", "bones look bad"]
    },
  ]

  function handleClick(image) {
    navigate("/imageview", { state: { image } });
  }

  return (
    <>
    <Banner text={"Medical Image Center"} />
    
    <div>
      {data.map((image) => {
        return (    
          <div key={image.id}>
            <h2>{image.physician}</h2>
            <img src={spineXray} />
            <button onClick={() => {handleClick(image)}}>View</button>
          </div>
        )
      })}
    </div>
    <WebFooter/>
    </>
  )
}
