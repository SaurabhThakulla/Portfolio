import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const fade = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
};

const projects = [
  {
    title: "Aura (Social Media App)",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
    github: "https://github.com/SaurabhThakulla/Social_App",
    live: "https://social-app-green-chi.vercel.app",
  },
  {
    title: "Chat App (Real-time Messaging)",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
    github: "https://github.com/SaurabhThakulla/Chat-App",
    live: "https://github.com/SaurabhThakulla/Chat-App",
  },
  {
    title: "Cloud Commerce Suite",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    github: "https://github.com/SaurabhThakulla/Cloud-Commerce-Suite",
    live: "https://github.com/SaurabhThakulla/Cloud-Commerce-Suite",
  },
];

const Projects = () => {
  return (
    <motion.section
      className="projects"
      id="projects"
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="projects-bg">PORTFOLIO</div>
      <div className="projects-header">
        <span className="pill">Latest Work</span>
        <h2>My Projects</h2>
        <p>Three snapshots of recent builds. Hover to jump into code or a live preview.</p>
      </div>

      <div className="project-grid">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="project-card"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: idx * 0.05, duration: 0.6 }}
          >
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="project-overlay">
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  style={{ cursor: "pointer" }}
                >
                  <FiGithub />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live demo"
                  style={{ cursor: "pointer" }}
                >
                  <FiExternalLink />
                </a>
              </div>
              <span className="project-title">{project.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
