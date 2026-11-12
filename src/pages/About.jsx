import { useState } from "react";
import htmlEssentials from "../assets/certificates/html-essentials.png";
import cssEssentials from "../assets/certificates/css-essentials.png";
import javascriptEssentials from "../assets/certificates/javascript-essentials-1.png";

import htmlEssentialsCredly from "../assets/certificates/HTML_Essentials_Credly.jpg";
import cssEssentialsCredly from "../assets/certificates/Muhammad_Ilyas_CSS_Essentials_Credly.jpg";
import javascriptEssentialsCredly from "../assets/certificates/Muhammad_Ilyas_JavaScript_Essentials1_Credly.jpg";

import htmlEssentialsCisco from "../assets/certificates/HTML_Essentials_Cisco.jpg";
import cssEssentialsCisco from "../assets/certificates/CSS_Essentials_Cisco.jpg";
import javascriptEssentialsCisco from "../assets/certificates/JavaScript_Essentials_Cisco.jpg";

import htmlExamResult from "../assets/certificates/HTML Exames percentage.JPG";
import cssExamResult from "../assets/certificates/CSS exams and test result.JPG";
import javascriptExamResult from "../assets/certificates/JavaScript Exam &Test result.jpg";

function About() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section className="about-section">
      <p className="eyebrow">GET TO KNOW ME</p>
      <h1>About Me</h1>

      <p>
        I'm Muhammad Ilyas. I'm building my skills in frontend development and
        creating responsive, user-friendly websites. I enjoy learning new
        technologies and improving my skills through practical projects.
      </p>

      <section id="certificates">
        <h2>Certificates and Badges</h2>

        <div className="Certificates">
          <img
            src={htmlEssentials}
            alt="HTML Essentials certificate"
            onClick={() => setSelectedImage(htmlEssentials)}
          />
          <img
            src={cssEssentials}
            alt="CSS Essentials certificate"
            onClick={() => setSelectedImage(cssEssentials)}
          />
          <img
            src={javascriptEssentials}
            alt="JavaScript Essentials certificate"
            onClick={() => setSelectedImage(javascriptEssentials)}
          />
        </div>

        <a
          className="cerficate-link"
          href="https://www.credly.com/users/muhammed-ilyas.c12676db"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Credly Badges
        </a>

        <div className="Certificates">
          <img
            src={htmlEssentialsCredly}
            alt="HTML Essentials Credly badge"
            onClick={() => setSelectedImage(htmlEssentialsCredly)}
          />
          <img
            src={cssEssentialsCredly}
            alt="CSS Essentials Credly badge"
            onClick={() => setSelectedImage(cssEssentialsCredly)}
          />
          <img
            src={javascriptEssentialsCredly}
            alt="JavaScript Essentials Credly badge"
            onClick={() => setSelectedImage(javascriptEssentialsCredly)}
          />
        </div>

        <div className="Certificates">
          <img
            src={htmlEssentialsCisco}
            alt="HTML Essentials Cisco certificate"
            onClick={() => setSelectedImage(htmlEssentialsCisco)}
          />
          <img
            src={cssEssentialsCisco}
            alt="CSS Essentials Cisco certificate"
            onClick={() => setSelectedImage(cssEssentialsCisco)}
          />
          <img
            src={javascriptEssentialsCisco}
            alt="JavaScript Essentials Cisco certificate"
            onClick={() => setSelectedImage(javascriptEssentialsCisco)}
          />
        </div>

        <a
          className="cerficate-link"
          href="https://www.netacad.com/profile?&tab=badges"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Cisco Profile
        </a>

        <h2>Exam Results</h2>
        <div className="Certificates">
          <img
            src={htmlExamResult}
            alt="HTML exam result"
            onClick={() => setSelectedImage(htmlExamResult)}
          />
          <img
            src={cssExamResult}
            alt="CSS exam and test result"
            onClick={() => setSelectedImage(cssExamResult)}
          />
          <img
            src={javascriptExamResult}
            alt="JavaScript exam and test result"
            onClick={() => setSelectedImage(javascriptExamResult)}
          />
        </div>

        {/* Lightbox: Clicked image ko large preview mein dikhana */}
        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              &times;
            </button>

            <img
              src={selectedImage}
              alt="Certificate large preview"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </section>
    </section>
  );
}

export default About;
