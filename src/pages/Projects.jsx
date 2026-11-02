import weatherImg from "../assets/projects/weather.png";
import studentImg from "../assets/projects/student-portal.png";
import storeImg from "../assets/projects/mini-store.png";
import nexaImg from "../assets/projects/Nexa-wave-intern.png";
import apexImg from "../assets/projects/apex-ai.png";
import multipleImg from "../assets/projects/multiple-projects.png";

const projects = [
  {
    id: 1,
    title: "Weather App",
    image: weatherImg,
    description:
      "A responsive weather application that displays weather information through a clean and user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/milyas1264/JS-weather-app",
    demo: "https://milyas1264.github.io/JS-weather-app/",
  },
  {
    id: 2,
    title: "Student Portal",
    image: studentImg,
    description:
      "A student-focused web interface designed to organize information with a simple and responsive layout.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/milyas1264/JS-Student-portal",
    demo: "https://milyas1264.github.io/JS-Student-portal/",
  },
  {
    id: 3,
    title: "Mini Web Store",
    image: storeImg,
    description:
      "A mini e-commerce interface featuring product cards and a responsive shopping experience.",
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://github.com/milyas1264/JS-mini-ecommerce-store",
    demo: "https://milyas1264.github.io/JS-mini-ecommerce-store/",
  },

  {
    id: 4,
    title: "NexaWave Landing Page",
    image: nexaImg,
    description:
      "A modern, responsive landing page developed as part of my Frontend Development Internship.",
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://github.com/milyas1264/landing-page-project",
    demo: "https://milyas1264.github.io/NexaWave-Responsive-Landing-Page/",
  },

  {
    id: 5,
    title: "Apex AI Studio Landing Page",
    image: apexImg,
    description:
      "A modern AI SaaS landing page featuring product highlights, an interactive prompt demo, testimonials and a contact section.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/milyas1264/apex_ai_studio_landing_page",
    demo: "https://milyas1264.github.io/apex_ai_studio_landing_page/",
  },

  {
    id: 6,
    title: "Multiple Projects Collection",
    image: multipleImg,
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
              <div className="project-number">
                {/* Project screenshot */}
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="project-image"
                />
              </div>
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
