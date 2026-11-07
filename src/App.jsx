import { useState } from "react";
import "./App.css";
// React state aur routing ke tools
import { Routes, Route, Link } from "react-router-dom";
// Hamare alag page components
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  // STATE: Website ka current theme store karta hai.
  // false = Light Mode, true = Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  // CONDITIONAL CLASS: State ke mutabiq CSS class change hoti hai.
  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      {/* NAVBAR: Logo, navigation links aur theme button */}
      <header className="navbar">
        <a href="#home" className="brand">
          ILYAS<span>.</span>
        </a>
        {/* Same page ke different sections ke links */}
        <nav className="nav-links">
          {/* React Router links: page reload ke baghair navigation */}
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </nav>

        {/* Contact page par navigate karne ke liye */}
        <Link to="/contact" className="nav-button">
          Let's Talk
        </Link>

        {/* EVENT HANDLER: Click par theme ki state toggle hoti hai */}
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {/* State ke mutabiq button ka text change hota hai */}
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>
      {/* HERO: Website ka main introduction section */}
      <main>
        {/* URL ke mutabiq sahi page render hota hai */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <section className="placeholder-section" id="about">
                <p className="eyebrow">GET TO KNOW ME</p>
                <h2>About Me</h2>
                <p>
                  I'm building my skills in frontend development and creating
                  projects to solve real-world problems.
                </p>
              </section>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {/* FOOTER: Website ka copyright aur closing section */}

      <footer className="footer">
        <p>© {new Date().getFullYear()} Muhammad Ilyas</p>

        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/muhammad-ilyas-3115341ba/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn Profile"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 18H5V9h3v9ZM6.5 7.73a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 18h-3v-4.38c0-1.04-.02-2.38-1.45-2.38-1.46 0-1.68 1.14-1.68 2.3V18h-3V9h2.88v1.23h.04a3.16 3.16 0 0 1 2.84-1.56C18.66 8.67 19 10.6 19 13.1V18Z"
              />
            </svg>
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/milyas1264"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub Profile"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.23-5.07-5.49 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.53.23 2.66.12 2.94.71.78 1.14 1.77 1.14 2.98 0 4.27-2.6 5.2-5.08 5.48.4.34.75 1 .75 2.02v3.13c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z"
              />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
