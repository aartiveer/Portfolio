import React from "react";
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase , FaJava} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>

    <div className="skills-grid">

        <div className="skill-card">
          <FaHtml5 className="skill-icon" />
          <span>HTML5</span>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="skill-icon" />
          <span>CSS3</span>
        </div>

        <div className="skill-card">
          <FaJs className="skill-icon" />
          <span>JavaScript</span>
        </div>

        <div className="skill-card">
          <FaReact className="skill-icon" />
          <span>React</span>
        </div>
        
        <div className="skill-card">
          
          <SiMongodb className="skill-icon"/>
          <span>MongoDB</span>
        </div>

        <div className="skill-card">
          <FaJava className="skill-icon" />
          <span>Java</span>
        </div>

        <div className="skill-card">
          <FaDatabase className="skill-icon" />
          <span>SQL</span>
        </div>

    </div>
    </section>
  );
};

export default Skills;
