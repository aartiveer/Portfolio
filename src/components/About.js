import React from "react";
import './About.css';
import image from '../assets/myPhoto.jpeg'; 

const About = () => {
    return (
        <div className="about-section">
            <h1>About Me</h1>
            <p>
                My name is Aarti Veer. I am a professional and enthusiastic programmer in my daily life.
                I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and 
                am passionate about problem-solving. I love almost all the stacks of web application development and love 
                to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things
                using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.
            </p>

            {/* Move image inside same parent element and fix src */}
            <div className="about-image">
                <img src={image} alt="Aarti Veer" />
            </div>
        </div>
    );
};

export default About;
