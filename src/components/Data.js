import React from 'react'
import profileImage from '../assets/Photo.jpeg';
import "./Header.css";

const Data = () => {
  return (
    <div className="home__img-wrapper">
        <img src={profileImage} alt="Chiranshu Agrawal" className="home__img"/>
    </div>
  )
}

export default Data
