function Projects() {
  // Portfolio mein apne projects ki information yahan dikhayenge.
  return (
    <main className="projects-section">
      <p className="eyebrow">MY RECENT WORK</p>
      <h2>Featured Projects</h2>

      <p className="section-description">
        Here are some projects I have built while learning frontend development.
      </p>

      {/* Project cards ka container */}
      <div className="projects-grid">
        <article className="project-card">
          <div className="project-number">01</div>
          <h3>Weather App</h3>
          <p>A weather application with a clear, user-friendly interface.</p>

          <div className="tech-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <a
            href="https://github.com/milyas1264"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub ↗
          </a>
        </article>

        <article className="project-card">
          <div className="project-number">02</div>
          <h3>Student Portal</h3>
          <p>A student-focused interface for organizing useful information.</p>

          <div className="tech-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <a
            href="https://github.com/milyas1264"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub ↗
          </a>
        </article>

        <article className="project-card">
          <div className="project-number">03</div>
          <h3>Mini Web Store</h3>
          <p>
            A simple e-commerce interface for displaying products in a
            responsive layout.
          </p>

          <div className="tech-tags">
            <span>React</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <a
            href="https://github.com/milyas1264"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub ↗
          </a>
        </article>
      </div>
    </main>
  );
}

export default Projects;
