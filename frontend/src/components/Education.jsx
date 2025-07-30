import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Education = () => {
  return (
    <section className="education-section">
      <h2 className="education-title">Education & Certificates</h2>

      <div className="education-container">
        <h3 className="section-heading">Educations</h3>
        <div className="education-card">
          <p className="edu-year">2022 - PRESENT</p>
          <h3 className="edu-degree">BSc in Computer Science</h3>
          <p className="edu-location">Unity University, Addis Ababa, Ethiopia</p>
        </div>
        <div className="education-card">
          <p className="edu-year">2022 - PRESENT</p>
          <h3 className="edu-degree">BA IN BUSINESS ADMNSTRATION AND INFORMATION SYSTEM</h3>
          <p className="edu-location">Addis Ababa University, Addis Ababa, Ethiopia</p>
        </div>
         <h3 className="section-heading">Certificates</h3>
        <div className="certificate-card">
         <p className="edu-year">Aug, 2024</p> <br />
          <p className="certificate-title">PROGRAMING FUNDAMENTALS - UDACITY </p>
          <a
            href="/path-to-your-certificate.pdf"
            download
            className="download-btn"
          >
            <FaDownload className="download-icon" /> Download Certificate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Education;
