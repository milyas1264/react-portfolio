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
        © {new Date().getFullYear()} Muhammad Ilyas
      </footer>
    </div>
  );
}

export default App;
