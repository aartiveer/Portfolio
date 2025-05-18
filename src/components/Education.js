import React from "react";
import './Education.css';

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2>Education</h2>
      <div className="education-timeline">

        <div className="education-item">
          <h3>Master's Degree</h3>
          <p>
            Master of Computer Science<br />
            Savitribai Phule Pune University (2024)<br />
            73.15%
          </p>
        </div>

        <div className="education-item">
          <h3>Bachelor's Degree</h3>
          <p>
            B.Sc. in Computer Science<br />
            Savitribai Phule Pune University (2022)<br />
            77.23%
          </p>
        </div>

        <div className="education-item">
          <h3>HSC</h3>
          <p>
            Chandmal Tarachand Bora College, Shirur<br />
            2019<br />
            63.85%
          </p>
        </div>

        <div className="education-item">
          <h3>SSC</h3>
          <p>
            Vidhyadham Prashala Shirur (SSPM)<br />
            2017<br />
            76.40%
          </p>
        </div>

      </div>
    </section>
  );
};

export default Education;
