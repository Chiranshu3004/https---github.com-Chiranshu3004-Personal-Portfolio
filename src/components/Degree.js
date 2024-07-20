import React from 'react'
import ImageEdu1 from '../assets/creative.png'
import ImageEdu2 from '../assets/jiit.png'
import './Education.css'
import Skill from './Skill'

const Degree = () => {
  return (
    <>
    <div className="degree-container">
      <i><h1>College Education</h1></i>
      <div className="degree-box">
        <div className="degree-image">
            <img src={ImageEdu2} alt="education" className="education-image" />
        </div>
        <div className="degree-details">
            <p>Jaypee Institute of Information Technology, Noida Sector-62</p>
            <p>Bachelor of Technology in Computer Science and Engineering</p>
        </div>
        <div className="degree-details1">
          <p>2021-2025</p>
          <p>CGPA: 8.0</p>
        </div>
      </div>
      <div className="visit-website">
        <button onClick={() => window.open('https://www.jiit.ac.in', '_blank')}>Visit Website</button>
      </div>
      <i><h1>School Education</h1></i>
      <div className="degree-box">
        <div className="degree-image">
            <img src={ImageEdu1} alt="education" className="education-image" />
        </div>
          <div className="degree-details">
              <p>Creative Public Senior Secondary School, Rajasthan</p>
              <p>Rajasthan Board of Secondary Education (R.B.S.E)</p>
          </div>
          <div className="degree-details1">
            <p>2007-2020</p>
          </div>
      </div>
      <div className="visit-website">
        <button onClick={() => window.open('https://www.thecreativepublicschool.com/', '_blank')}>Visit Website</button>
      </div>
    </div>
    <Skill/>
    </>
  )
}

export default Degree
