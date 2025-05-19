import React from "react";
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        
        <div className="contact-info">
          <p><FaEnvelope className="icon" /> aartiveer1212@gmail.com</p>
          <p><FaPhoneAlt className="icon" /> +91 73857 53636</p>
          <p>
            <FaLinkedin className="icon" /> 
            <a 
              href="https://www.linkedin.com/in/aarti-veer/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/aarti-veer/
            </a>
          </p>

          <div className="social-icons">
            <a href="mailto:aartiveer1212@gmail.com"><FaEnvelope /></a>
            <a 
              href="https://www.linkedin.com/in/aarti-veer/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/aartiveer" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
