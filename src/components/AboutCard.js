import React from 'react'
import Imgcard from '../assets/card.png'
import Imgcard2 from '../assets/bakend.png'
import Imgcard3 from '../assets/images.png'
import './Footer.css'

const AboutCard = () => {
  return (
    <>
    <div className="card-container">
        <div className="card-description">
            <div className="card-box">
                <div className="card-title">Frontend Developer</div>
                <div className="card-info">I excel in creating engaging and intuitive user interfaces using technologies such as HTML, CSS, and JavaScript. My experience includes developing dynamic and responsive web applications with frameworks like React.js and libraries like Bootstrap. I enjoy bringing designs to life and ensuring a seamless user experience. My front-end projects have included real-time news websites and digital note-taking solutions that enhance user productivity.</div>
            </div>
            <div className="card-image">
                <img src={Imgcard} className="img-fluid" alt="Frontend Developer" />
            </div>
        </div>
        <div className="card-description">
            <div className="card-image">
                <img src={Imgcard3} className="img-fluid" alt="Backend Developer" />
            </div>
            <div className="card-box">
                <div className="card-title">Backend Developer</div>
                <div className="card-info">I have a solid foundation in back-end development, working with technologies like Node.js, Express.js, and MongoDB. My projects often involve creating robust and scalable server-side applications that handle complex functionalities, such as secure user authentication and efficient database management. I am passionate about designing APIs and managing server operations to ensure the smooth performance of web applications.</div>
            </div>
        </div>
        <div className="card-description">
            <div className="card-box">
                <div className="card-title">Software Developer and Programmer</div>
                <div className="card-info">I am proficient in several programming languages, including C, C++, and Python. My software development journey involves continuous learning and adapting to new technologies and methodologies. I have a solid knowlwdge in DSA, which helps me solve coding problems efficiently. I'm also familiar with tools like VSCode, GitHub, and Git, which help me in writing and managing my code.</div>
            </div>
            <div className="card-image">
                <img src={Imgcard2} className="img-fluid" alt="Software Developer" />
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutCard
