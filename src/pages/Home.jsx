import { Link } from "react-router-dom";

function Home() {
  // Home page ka main content
  return (
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
          <Link to="/projects" className="primary-button">
            View My Work ↗
          </Link>

          {/* Contact route par bina full page reload ke jana */}
          <Link to="/contact" className="secondary-button">
            Contact Me
          </Link>
        </div>

        <p className="hero-note">Learning, building and growing every day.</p>
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
  );
}

export default Home;
