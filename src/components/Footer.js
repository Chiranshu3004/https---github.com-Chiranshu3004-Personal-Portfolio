import React from 'react'
import {HashLink as Link} from 'react-router-hash-link';
import "./Footer.css"

const Footer = () => {

    let date = new Date();
    let year = date.getFullYear();

  return (
    <div className="footer">
      <div className="footer-section">
        <h3>Designed and Developed by Chiranshu Agrawal</h3>
      </div>
      <div className="footer-section">
        <h3>Copyright © {year} CA</h3>
      </div>
      <div className="footer-section">
        <ul className="footer-icons">
          <li className="social-icons">
            <Link
              to="https://github.com/Chiranshu3004"
              style={{ color: "white" }}
              target="_blank" 
            //   rel="noopener noreferrer"
            >
              <i className="uil uil-github-alt"></i>
            </Link>
          </li>
          
          <li className="social-icons">
            <Link
              to="https://www.linkedin.com/in/chiranshu-agrawal-0360b0262/"
              style={{ color: "white" }}
              target="_blank" 
            //   rel="noopener noreferrer"
            >
              <i className="uil uil-linkedin"></i>
            </Link>
          </li>
          <li className="social-icons">
            <Link
              to="https://www.instagram.com/YourInstagramHandle"
              style={{ color: "white" }}
              target="_blank" 
            //   rel="noopener noreferrer"
            >
              <i className="uil uil-instagram"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
