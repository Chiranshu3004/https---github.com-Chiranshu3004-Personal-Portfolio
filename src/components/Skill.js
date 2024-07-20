import React from 'react'
import ImgC from '../assets/C.png';
import ImgCpp from '../assets/html.png';
import ImgPython from '../assets/css.png';
import ImgJS from '../assets/js.png';
import ImgHTML from '../assets/python.png';
import ImgCSS from '../assets/react.png';
import ImgReact from '../assets/mongodb.png';
import ImgNode from '../assets/express.png';
import ImgMongo from '../assets/node.png';
import ImgVSCode from '../assets/vscode.png';
import ImgGitHub from '../assets/github.png';
import ImgGit from '../assets/git.png';
import ImgSQL from '../assets/sql.png';
import './Education.css';

const Skill = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Technical Skills</h1>
      <div className="skills-grid">
        <div className="skill">
          <img src={ImgC} alt="C" className="skill-image" />
          <p>C/C++</p>
        </div>
        <div className="skill">
          <img src={ImgCpp} alt="C++" className="skill-image" />
          <p>HTML</p>
        </div>
        <div className="skill">
          <img src={ImgPython} alt="Python" className="skill-image" />
          <p>CSS</p>
        </div>
        <div className="skill">
          <img src={ImgJS} alt="JavaScript" className="skill-image" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img src={ImgHTML} alt="HTML" className="skill-image" />
          <p>Python</p>
        </div>
        <div className="skill" >
          <img src={ImgCSS} alt="CSS" className="skill-image" />
          <p>React</p>
        </div>
        <div className="skill">
          <img src={ImgReact} alt="React" className="skill-image" />
          <p>MongoDB</p>
        </div>
        <div className="skill">
          <img src={ImgNode} alt="Node.js" className="skill-image" />
          <p>Express.js</p>
        </div>
        <div className="skill">
          <img src={ImgMongo} alt="MongoDB" className="skill-image" />
          <p>Node.js</p>
        </div>
        <div className="skill">
          <img src={ImgSQL} alt="Git" className="skill-image" />
          <p>SQL</p>
        </div>
      </div>
      <br/><br/><br/>
      <h1 className="skills-title">Technologies Used</h1>
      <div className="skills-grid2">
        <div className="skill2">
          <img src={ImgVSCode} alt="VS Code" className="skill-image" />
          <p>VS Code</p>
        </div>
        <div className="skill2">
          <img src={ImgGitHub} alt="GitHub" className="skill-image" />
          <p>GitHub</p>
        </div>
        <div className="skill2">
          <img src={ImgGit} alt="Git" className="skill-image" />
          <p>Git</p>
        </div>
      </div>
    </div>
  )
}

export default Skill
