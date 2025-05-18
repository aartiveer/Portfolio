import React from "react";
import './About.css';
import image from '../assets/myPhoto.jpeg'; 

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            My name is <strong>Aarti Veer</strong>. I am a passionate and enthusiastic Full Stack Developer with a
            strong interest in solving real-world problems through technology. I am a fast learner with a self-driven
            attitude and love exploring new technologies.
          </p>
          <p>
            I specialize in modern web development, primarily working with <b>JavaScript</b>, and I enjoy building user-friendly
            and accessible web applications. I'm always open to opportunities that align with my skills and passion.
          </p>
        </div>
        <div className="about-image">
          <img src={image} alt="Aarti Veer" />
        </div>
      </div>
    </section>
  );
};

export default About;
