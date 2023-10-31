import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import WebFooter from './WebFooter'
import { useNavigate } from "react-router-dom";
import { API_URL } from "../constants";
import { useAuth } from "../contexts/AuthContext";
import { Container, Image } from "react-bootstrap";


export default function ImageLibrary() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      fetch(`${API_URL}/api/user/${user.uid}/images`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.accessToken,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setImages(data.images);
        })
        .catch((err) => console.error("Error fetching data: ", err));

    }
    fetchImages();

  }, []);

  function handleClick(image) {
    navigate("/imageview", { state: { image } });
  }

  return (
    <>
    <Banner text={"Medical Image Center"} />

    <Container>
      {images.map((image) => {
        return (
          <div key={image.uid}>

            <Image src={image.url} />
            <button onClick={() => {handleClick(image)}}>View</button>
          </div>
        )
      })}
    </Container>
    <WebFooter/>
    </>
  )
}
