const projects = [
  {
    id: 1,
    title: "Weather App",
    description:
      "A responsive weather application that displays weather information through a clean and user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/milyas1264/JS-weather-app",
    demo: "https://milyas1264.github.io/JS-weather-app/",
  },
  {
    id: 2,
    title: "Student Portal",
    description:
      "A student-focused web interface designed to organize information with a simple and responsive layout.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/milyas1264/JS-Student-portal",
    demo: "https://milyas1264.github.io/JS-Student-portal/",
  },
  {
    id: 3,
    title: "Mini Web Store",
    description:
      "A mini e-commerce interface featuring product cards and a responsive shopping experience.",
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://github.com/milyas1264/JS-mini-ecommerce-store",
    demo: "https://milyas1264.github.io/JS-mini-ecommerce-store/",
  },

  {
    id: 4,
    title: "AppRo8 Landing Page",
    description:
      "A modern, responsive landing page developed as part of my Frontend Development Internship.",
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://github.com/milyas1264/landing-page-project",
    demo: "https://milyas1264.github.io/landing-page-project/",
  },

  {
    id: 5,
    title: "Apex AI Studio",
    description:
      "A modern AI SaaS landing page featuring product highlights, an interactive prompt demo, testimonials and a contact section.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/milyas1264/apex_ai_studio_landing_page",
    demo: "https://milyas1264.github.io/apex_ai_studio_landing_page/",
  },

  {
    id: 6,
    title: "Multiple Projects Collection",
    description:
      "A collection of frontend projects and coding assignments built during my learning journey with SMIT and Cisco, covering HTML, CSS and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/milyas1264/multiple-projects",
    demo: "https://milyas1264.github.io/multiple-projects/index.html",
  },
];

function Projects() {
  return (
    <main className="projects-section">
      <p className="eyebrow">MY RECENT WORK</p>
      <h2>Featured Projects</h2>

      <p className="section-description">
        Here are some projects I have built while learning frontend development.
      </p>

      {/* Projects array se cards generate karna */}
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-number">
              {String(project.id).padStart(2, "0")}
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {/* Technologies ki list */}
            <div className="tech-tags">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            {/* Project links */}
            <div className="project-links">
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo ↗
              </a>

              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub Code ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Projects;
