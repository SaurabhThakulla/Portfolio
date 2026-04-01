import { useState } from "react";
import { motion } from "framer-motion";
import { FiCode, FiCpu, FiMonitor, FiBookOpen } from "react-icons/fi";

const fade = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
};

const categories = [
  { key: "software", label: "Software Engineering", icon: <FiCode /> },
  { key: "fullstack", label: "Fullstack Development", icon: <FiMonitor /> },
  { key: "devops", label: "DevOps & Cloud", icon: <FiCpu /> },
  { key: "ai", label: "AI / ML Engineering", icon: <FiBookOpen /> },
];

const services = [
  {
    title: "Software Engineering",
    tag: "FEATURED",
    description: "Robust systems, clean patterns, testing-first delivery.",
    featured: true,
  },
  {
    title: "Fullstack Development",
    tag: "FEATURED",
    description: "Responsive web apps, TypeScript frontends and secure APIs.",
    featured: true,
  },
  {
    title: "DevOps & Cloud",
    tag: "AVAILABLE",
    description: "CI/CD, IaC, containers, observability, zero-downtime releases.",
    featured: false,
  },
  {
    title: "AI / ML Engineering",
    tag: "AVAILABLE",
    description: "LLM apps, retrieval, evaluation, and production MLOps pipelines.",
    featured: false,
  },
  {
    title: "Platform Reliability",
    tag: "AVAILABLE",
    description: "24/7 monitoring, incident response, SLOs, and resilience testing.",
    featured: false,
  },
  {
    title: "System Integration",
    tag: "AVAILABLE",
    description: "Connecting services with clean contracts and event-driven workflows.",
    featured: false,
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState<string>(categories[0].key);

  return (
    <motion.section
      className="services"
      id="services"
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="services-bg">SERVICES</div>

      <div className="services-header">
        <span className="pill">What I Do</span>
        <h2>Service Categories</h2>
        <p>Software engineer, fullstack dev, DevOps, and AI/ML engineering under one roof.</p>
      </div>

      <div className="services-tabs">
        {categories.map((c) => (
          <button
            key={c.key}
            className={`service-pill ${activeTab === c.key ? "active" : ""}`}
            type="button"
            onClick={() => setActiveTab(c.key)}
          >
            <span className="service-pill__icon">{c.icon}</span>
            <span>{c.label}</span>
          </button>
        ))}
      </div>

      <div className="services-grid">
        {services.map((svc, idx) => (
          <motion.div
            key={svc.title}
            className="service-card"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: idx * 0.05, duration: 0.6 }}
            whileHover={{
              y: -4,
              scale: 1.03,
              boxShadow: "0 28px 60px rgba(0, 0, 0, 0.55), 0 0 24px rgba(99, 132, 255, 0.2)",
              borderColor: "rgba(111, 139, 255, 0.4)",
            }}
          >
            <div className="service-card__top">
              <h3>{svc.title}</h3>
              {svc.featured && <span className="service-star">★</span>}
            </div>
            <p className="service-card__desc">{svc.description}</p>
            <div className="service-card__cta">
              <span className={`service-chip ${svc.tag === "FEATURED" ? "chip-hot" : "chip-cool"}`}>
                {svc.tag}
              </span>
              <span className="arrow">→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
