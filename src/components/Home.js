import React from 'react';
import Social from './Social'
import Data from './Data'
import "./Header.css";
import myImg from '../assets/sd.png'
import Type from './Type';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <h3>Hello, It's Me</h3>
          <h1>Chiranshu Agrawal</h1>
          <h2>I'm a <span className="home__subtitle"><Type/></span></h2>
        </div>
        <Data/>
      </div>

      <div className="home-about-section" id="about">
        <div className="home-about-content">
          <div className="home-about-description">
            <h1>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Dynamic and results-oriented engineer with a strong foundation in technical excellence.
              <br />
              <br />I specialize in creating dynamic and responsive web applications using technologies like 
              <i>
                <b className="purple"> React, Node.js, MongoDB, Express.js and more.</b>
              </i>
              <br />
              <br />
              As a  
              <i>
                <b className="purple"> Computer Science and Engineering student, </b>
              </i>
              I've gained a strong foundation in
              <i>
                <b className="purple"> software development, algorithms, and data structures, </b>
              </i>
              which I leverage to solve complex problems efficiently.
              <br />
              <br />
              Continuously exploring <i><b className="purple">new technologies and methodologies</b></i> to stay ahead in the tech industry.
              <br />
              
            </p>
          </div>
          <div className="myAvtar">
            <img src={myImg} className="img-fluid" alt="Software Developer" />
          </div>
        </div>
        <div className="home-about-social">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p>
          <Social/>          
        </div>
      </div>
    </section>
  )
}

export default Home
