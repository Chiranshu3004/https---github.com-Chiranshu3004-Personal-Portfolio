import React from 'react'
import {HashLink as Link} from 'react-router-hash-link';
import "./Header.css";

const Social = () => {
  return (
    <>
    <div className="home__social">
        <Link to="https://www.linkedin.com/in/chiranshu-agrawal-0360b0262/" className="home__social-icon" target='__blank'>
        <i className="uil uil-linkedin"></i>
        </Link>
        <Link to="https://www.instagram.com/chiranshu_03/" className="home__social-icon" target='__blank'>
        <i className="uil uil-instagram"></i>
        </Link>
        <Link to="https://github.com/Chiranshu3004" className="home__social-icon" target='__blank'>
        <i className="uil uil-github-alt"></i>
        </Link>
        
    </div>
    <div>
      <a href="https://drive.google.com/file/d/1gHsGXL8IiJ-CU0a_-NMWZUP27CSiqXpa/view?usp=sharing" className='btn' target="_blank" rel="noopener noreferrer">Download CV</a>
    </div>
    </>
  )
}

export default Social
