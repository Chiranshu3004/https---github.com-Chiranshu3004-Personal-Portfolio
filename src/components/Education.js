import React from 'react'
import ImageEdu from '../assets/degree.png'
import Img1 from '../assets/leetcode.png'
import Img2 from '../assets/gfg.png'
import Img3 from '../assets/codechef.png'
import Img4 from '../assets/codeforces.png'
import Img5 from '../assets/coding_ninja.png'
import "./Education.css"
import Degree from './Degree'

const Education = () => {
  return (
    <div className="education">
        <div className="container-education">
            <div className="education-image">
                <img src={ImageEdu} alt="education" className="education-image" />
            </div>
            <div className="education-container">
                <div className="education-title">Education</div>
                <div className="education-content">
                    <h3>Basic Qualification Information</h3>
                </div>
                <div className="practice-image">
                    <a href="https://leetcode.com/u/chiranshu123/" target="_blank" rel="noopener noreferrer">
                    <img src={Img1} className="img-fluid" alt="Leetcode" />
                    </a>
                    <a href="https://www.geeksforgeeks.org/user/agarwalchirr0xo/" target="_blank" rel="noopener noreferrer">
                    <img src={Img2} className="img-fluid" alt="GFG" />
                    </a>
                    <a href="https://www.codechef.com/users/chiranshu123" target="_blank" rel="noopener noreferrer">
                    <img src={Img3} className="img-fluid" alt="Codechef" />
                    </a>
                    <a href="https://codeforces.com/profile/Chiranshu2003" target="_blank" rel="noopener noreferrer">
                    <img src={Img4} className="img-fluid" alt="Codeforces" />
                    </a>
                    <a href="https://www.naukri.com/code360/profile/d1236267-c6bf-43d2-b787-9573d959491e" target="_blank" rel="noopener noreferrer">
                    <img src={Img5} className="img-fluid" alt="Coding-Ninja" />
                    </a>
                </div>
            </div>
        </div>
        <Degree/>
    </div>
  )
}

export default Education
