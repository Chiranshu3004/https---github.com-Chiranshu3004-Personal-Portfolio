import React from 'react'
import Img from '../assets/About.png'
import './Footer.css'
import AboutCard from './AboutCard'

const About = () => {
  return (
    <div className="about-container">
    <div className="container">
      <div className="about-description">
        <h1>
          ABOUT <i><strong className="purple1">MYSELF</strong></i>
        </h1>
        <p>I am <i><strong className="purple1">CHIRANSHU AGRAWAL</strong></i> from <i><strong className="purple1">Gangapur City, Rajasthan, India.</strong></i></p>
        <p>I am currently pursuing <i><strong className="purple1">B.Tech</strong></i> in <i><strong className="purple1">Computer Science and Engineering</strong></i> from <i><strong className="purple1">Jaypee Institute of Information Technology</strong></i>, located in <i><strong className="purple1">Noida, Sector-62.</strong></i></p>
        <div className="about-content">
          <p>Roll No.: <i><strong className="purple1">21103220</strong></i></p>
          <p>Phone: <i><strong className="purple1">+91-7976100486</strong></i></p>
          <p>Email: <i><strong className="purple1">agarwalchiranshu2003@gmail.com</strong></i></p>
          <p>College Email: <i><strong className="purple1">21103220@mail.jiit.ac.in</strong></i></p>
        </div>
      </div>
      <div className="about-image">
        <img src={Img} className="img-fluid" alt="Software Developer" />
      </div>
    </div>
    <AboutCard/>
    </div>
  )
}

export default About
