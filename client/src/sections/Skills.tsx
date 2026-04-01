import { useMemo, useState, type JSX } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiKubernetes,
  SiTerraform,
  SiJupyter,
  SiPytorch,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiFramer,
  SiRedux,
  SiRedis,
  SiGithubactions,
  SiLinux,
  SiPandas,
  SiNumpy,
  SiReactquery,
  SiPostman,
} from "react-icons/si";
import { TbDatabaseExport, TbApi } from "react-icons/tb";
import { FiCpu, FiCloud, FiLayers } from "react-icons/fi";

const fade = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
};

const categories = [
  { key: "frontend", label: "Frontend", icon: <FaReact /> },
  { key: "backend", label: "Backend", icon: <FiCpu /> },
  { key: "devops", label: "Cloud & DevOps", icon: <FiCloud /> },
  { key: "ai", label: "AI / Data", icon: <FiLayers /> },
];

const skillSets: Record<string, { name: string; icon: JSX.Element }[]> = {
  frontend: [
    { name: "React", icon: <FaReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Framer", icon: <SiFramer /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "TanStack", icon: <SiReactquery /> },
    { name: "Shadcn/ui", icon: <FiCpu /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <FaNodeJs /> },
    { name: "Postgres", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "REST APIs", icon: <TbApi /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Thunder Client", icon: <SiPostman /> },
    { name: "Testing", icon: <FiLayers /> },
    { name: "SQL", icon: <TbDatabaseExport /> },
    { name: "Redis", icon: <SiRedis /> },
  ],
  devops: [
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Terraform", icon: <SiTerraform /> },
    { name: "CI/CD", icon: <FiCloud /> },
    { name: "NGINX", icon: <FiCpu /> },
    { name: "Monitoring", icon: <FiLayers /> },
    { name: "Caching", icon: <TbDatabaseExport /> },
    { name: "GitHub Actions", icon: <SiGithubactions /> },
    { name: "Linux", icon: <SiLinux /> },
  ],
  ai: [
    { name: "Python", icon: <SiJupyter /> },
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "LangChain", icon: <FiLayers /> },
    { name: "Vector DB", icon: <TbDatabaseExport /> },
    { name: "OpenAI APIs", icon: <FiCpu /> },
    { name: "LLM Eval", icon: <FiCloud /> },
    { name: "Data Viz", icon: <SiTailwindcss /> },
    { name: "MLOps", icon: <SiKubernetes /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "NumPy", icon: <SiNumpy /> },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>(categories[0].key);
  const skills = useMemo(() => skillSets[activeTab] || [], [activeTab]);

  return (
    <motion.section
      className="skills"
      id="skills"
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="skills-bg">SKILL</div>

      <div className="skills-header">
        <span className="pill">My Stack</span>
        <h2>My Skills</h2>
        <p>Frontend, backend, cloud, DevOps, and AI tools I ship with every week.</p>
      </div>

      <div className="skills-tabs">
        {categories.map((c) => (
          <button
            key={c.key}
            className={`skill-pill ${activeTab === c.key ? "active" : ""}`}
            onClick={() => setActiveTab(c.key)}
            type="button"
          >
            <span className="skill-pill__icon">{c.icon}</span>
            <span>{c.label}</span>
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.name} className="skill-card">
            <div className="skill-card__icon">{s.icon}</div>
            <span className="skill-card__label">{s.name}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
