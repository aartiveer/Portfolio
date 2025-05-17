import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaYoutube} from "react-icons/fa";
import './HeroSection.css';


const HeroSection = () => {
    return (
        <section className="hero-container">
            <div className="hero">
                <h2 className="name"> Aarti veer </h2>
                <h1>Hi , I'm Aarti</h1>
                <p>
                    I'm a passionate <b><i>Full Stack developer </i></b>
          applications using HTML, CSS, JavaScript, React, Node.js, MongoDB, and more. I love building
          clean, user-focused products and learning new technologies.
                </p>

            <div className="hero-icons">
                <a href="mailto:aartiveer1212@gmail.com"><FaEnvelope /></a>
                <a href="https://www.linkedin.com/in/aarti-veer?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPJSD12UqQ%2BOkSTh5N2lTUQ%3D%3D"><FaLinkedin /></a>
                <a href="https://github.com/aartiveer"><FaGithub /></a>
                <a href="#"><FaYoutube /></a>
            </div>

            
            <button className="hero-btn">📄 See My Resume</button>
            </div>
        </section>
    );
};

export default HeroSection;