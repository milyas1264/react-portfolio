import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

import "./App.css";

function App() {
  return (
    <>
      <header className="navbar">
        <a href="#home" className="brand">
          ILYAS<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <p className="eyebrow">FRONTEND DEVELOPER</p>

            <h1>
              Hi, I'm <span>Muhammad Ilyas.</span>
              <br />I build for the web.
            </h1>

            <p className="hero-description">
              I create responsive and user-friendly websites using HTML, CSS,
              JavaScript and React. I enjoy turning ideas into clean web
              experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Work ↗
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <p className="hero-note">
              Learning, building and growing every day.
            </p>
          </div>

          <div className="hero-visual">
            <div className="visual-circle">
              <div className="code-card">
                <span className="code-dots">● ● ●</span>
                <p>const developer = {"{"}</p>
                <p className="code-indent">
                  name: <span>"Ilyas"</span>,
                </p>
                <p className="code-indent">
                  skills: <span>"React"</span>,
                </p>
                <p className="code-indent">
                  passion: <span>"Web"</span>
                </p>
                <p>{"}"}</p>
              </div>
              <span className="floating-badge">React Developer</span>
            </div>
          </div>
        </section>

        <section className="placeholder-section" id="about">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>About Me</h2>
          <p>
            I'm building my skills in frontend development and creating projects
            to solve real-world problems.
          </p>
        </section>

        <section className="placeholder-section" id="projects">
          <p className="eyebrow">MY RECENT WORK</p>
          <h2>Projects</h2>
          <p>My portfolio projects will be showcased here.</p>
        </section>

        <section className="placeholder-section" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Contact Me</h2>
          <p>Let's talk about websites and development projects.</p>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Muhammad Ilyas
      </footer>
    </>
  );
}

export default App;
