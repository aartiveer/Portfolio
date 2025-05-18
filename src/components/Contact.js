import React from "react";
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub} from "react-icons/fa";

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <h2>Contact Me</h2>
            <div className="contact-container">

                <div className="contact-info">
                    <p><FaEnvelope className="icon"/> aartiveer1212@gmail.com</p>
                    <p><FaPhoneAlt className="icon"/> +917385753636</p>
                    <p><FaLinkedin /></p>
                <div className="social-icons">
                                <a href="mailto:aartiveer1212@gmail.com"><FaEnvelope /></a>
                                <a href="https://www.linkedin.com/in/aarti-veer?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPJSD12UqQ%2BOkSTh5N2lTUQ%3D%3D"><FaLinkedin /></a>
                                <a href="https://github.com/aartiveer"><FaGithub /></a>
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