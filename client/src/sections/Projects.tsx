import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import AdBanner from "../components/Adbaner";

const fade = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
};

const projects = [
  {
    title: "Aura Social Platform",
    summary: "A modern social product with strong UI rhythm, community flows, and polished interaction design.",
    stack: "React / Node",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
    github: "https://github.com/SaurabhThakulla/Social_App",
    live: "https://social-app-green-chi.vercel.app",
  },
  {
    title: "Realtime Chat Experience",
    summary: "Fast messaging with live updates, room-based collaboration, and a cleaner communication flow.",
    stack: "Sockets / TS",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
    github: "https://github.com/SaurabhThakulla/Chat-App",
    live: "https://github.com/SaurabhThakulla/Chat-App",
  },
  {
    title: "Koda",
    summary: "Koda is a real-time collaborative code editor that enables multiple users to write and edit code simultaneously with minimal latency.",
    stack: "Cloud / API",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    github: "https://github.com/SaurabhThakulla/Koda",
    live: "#",
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
        <h2>Featured Projects</h2>
        <p>Recent builds that combine product thinking, frontend craft, and production-focused engineering.</p>
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
              <span className="project-stack">{project.stack}</span>
              <span className="project-title">{project.title}</span>
              <p className="project-summary">{project.summary}</p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub`}
                >
                  <FiGithub />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <AdBanner />
    </motion.section>
  );
};

export default Projects;
