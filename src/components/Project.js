import React from 'react'
import './Project.css';
import { HashLink as Link } from 'react-router-hash-link';
import ImgNtbk from '../assets/iNotebook.png'
import ImgNews from '../assets/NewsHub.png'
import Imgtext from '../assets/Textutils.png'
import ImgPort from '../assets/Portfolio.png'
import ImgClk from '../assets/Clock.png'
import ImgMusic from '../assets/Music_Player.png'
import ImgEstate from '../assets/EstateEase.png'
import Imglist from '../assets/To-Do_List.png'
import ImgPark from '../assets/Parkezee.png'

const Project = () => {

    const projects = [
        {
          imgPath: ImgEstate,
          title: 'EstateEase',
          description: 'Developed a cutting-edge digital note-taking solution using HTML, CSS, Node.js, React.js, and MongoDB. Features include private and secure editing, uploading, and deletion of personal notes, resulting in a 40% improvement in user satisfaction for note organization. The project incorporates robust user authentication via or JWT for token-based security.',
          ghLink: 'https://github.com/Chiranshu3004/iNotebook',
        },
        {
          imgPath: ImgPort,
          title: 'Personal Portfolio',
          description: 'Developed a cutting-edge digital note-taking solution using HTML, CSS, Node.js, React.js, and MongoDB. Features include private and secure editing, uploading, and deletion of personal notes, resulting in a 40% improvement in user satisfaction for note organization. The project incorporates robust user authentication via or JWT for token-based security.',
          ghLink: 'https://github.com/Chiranshu3004/iNotebook',
        },
        {
          imgPath: ImgNtbk,
          title: 'NoteMaster',
          description: 'Developed a cutting-edge digital note-taking solution using HTML, CSS, Node.js, React.js, and MongoDB. Features include private and secure editing, uploading, and deletion of personal notes, resulting in a 40% improvement in user satisfaction for note organization. The project incorporates robust user authentication via or JWT for token-based security.',
          ghLink: 'https://github.com/Chiranshu3004/iNotebook',
        },
        {
          imgPath: ImgNews,
          title: 'NewsSphere',
          description: 'Created a dynamic news website using HTML, CSS, React.js, API calls, and Bootstrap. This project gathers and delivers real-time news based on user searches, utilizing React JS functionalities like Context API, useReducer, useContext, Custom Hooks, and routing, leading to a 40% faster page loading speed and a 30% reduction in data retrieval times.',
          ghLink: 'https://github.com/Chiranshu3004/NewsHub',
        },
        {
            imgPath: Imgtext,
            title: 'TextManipulator',
            description: 'Developed a text utility tool using HTML, CSS, JavaScript and React.js. This project provides various text manipulation functionalities such as text transformation, removal of extra spaces, clear text.  It provides an intuitive interface for efficiently managing and formatting text, making it a useful resource for everyday text editing tasks.',
            ghLink: 'https://github.com/Chiranshu3004/TextUtils/tree/master',
          },
          {
            imgPath: ImgPark,
            title: 'ParkEzee',
            description: 'Created Parkezee, a web application that allows users to check real-time availability of parking spaces and book slots through the website or mobile devices. The platform features a responsive design with login and signup functionalities, built using HTML, CSS, and JavaScript. We can also found the location where parking spaces are free.',
            ghLink: 'https://github.com/Chiranshu3004/OSDC-Project',
          },
          {
            imgPath: ImgMusic,
            title: 'Music-Player',
            description: 'Created a fully functional music player application using HTML, CSS, and JavaScript. This project allows users to play, pause, and navigate through music tracks with an intuitive and responsive interface.',
            ghLink: 'https://github.com/Chiranshu3004/Music-Player',
          },
          {
            imgPath: Imglist,
            title: 'To Do List',
            description: 'Developed a user-friendly to-do list application using HTML, CSS, and JavaScript. This project allows users to add, edit, and delete tasks efficiently, providing a seamless task management experience. ',
            ghLink: 'https://github.com/Chiranshu3004/iNotebook',
          },
          {
            imgPath: ImgClk,
            title: 'Clock',
            description: 'Designed a digital clock using HTML, CSS, and JavaScript. This project displays the current time with a sleek and modern user interface, demonstrating proficiency in real-time data rendering.',
            ghLink: 'https://github.com/Chiranshu3004/Clock',
          },
          
      ];
  return (
    <div className="projects-section">
      <h1 className="project-heading">My Recent <strong className="purple1">Works</strong></h1>
      <p>Here are a few projects I've worked on.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imgPath} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              <Link to={project.ghLink} target="_blank" rel="noopener noreferrer" className="github-button">
              <i className="uil uil-github-alt"></i>&nbsp; GitHub
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
