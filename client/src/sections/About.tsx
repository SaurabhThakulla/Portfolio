import { motion } from "framer-motion";
import img from "../assets/about.jpeg";

const fade = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
};

const About = () => {
    return (
        <motion.section
            className="about"
            id="about"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
        >
            <div className="about-bg">ABOUT</div>
            <div className="about-header">
                <span className="pill">About</span>
                <h2>About Me</h2>
            </div>

            <div className="about-grid">
                <motion.div
                    className="about-photo"
                    variants={fade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.35 }}
                >
                    <div className="about-photo__frame"></div>
                    <img src={img} alt="Saurabh portrait" />
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-bio"
                        variants={fade}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.35 }}
                    >
                        <span className="pill pill-sm">Bio</span>
                        <p>
                            Hey there! I am Saurabh, a tech-savvy and creative powerhouse blending software engineering. I love
                            crafting smooth experiences�whether it&apos;s coding full stack apps, automating workflows, or designing
                            eye-catching visuals.
                        </p>
                        <p>
                            I&apos;m always hunting for the next challenge and new things to learn. Let&apos;s build something memorable
                            together!
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-facts"
                        variants={fade}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.35 }}
                    >
                        <div><strong>Birthday:</strong> Oct 9</div>
                        <div><strong>Nationality:</strong> Nepali</div>
                        <div><strong>Phone:</strong> +911 9373532312</div>
                        <div><strong>Email:</strong> Saurabhthakulla6@gmail.com</div>
                        <div><strong>Address:</strong> Tikapur, Nepal</div>
                        <div><strong>Role:</strong> Software Engineer</div>
                    </motion.div>

                    <motion.div
                        className="about-actions"
                        variants={fade}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.35 }}
                    >
                        <button className="btn outline"><span>Contact Me</span></button>
                        <button className="btn primary"><span>Hire Now</span></button>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="about-codewall"
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.25 }}
            >
                <div className="code-card">
                    <div className="code-card__header">
                        <div className="code-card__dots" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <span className="code-card__title">debugLife.ts</span>
                    </div>
                    <pre className="code-card__body">
{`while (alive) {
  hydrate();
  shipFeature();
  celebrate("tiny wins");
  if (coffee.level === 0) throw new Error("refuel");
}

// — Saurabh`}
                    </pre>
                </div>

                <div className="code-card">
                    <div className="code-card__header">
                        <div className="code-card__dots" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <span className="code-card__title">featureGym.js</span>
                    </div>
                    <pre className="code-card__body">
{`if (isCodeWorking) {
  while (quality < perfection) {
    refactor();
    test();
    quality++;
  }
}

// perfect is a moving target (scope creep approves)`}
                    </pre>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default About;
