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
                            I am Saurabh, a software engineer who enjoys turning ambitious ideas into clean, usable products. My
                            sweet spot is blending frontend polish with backend reliability so the final experience looks sharp and
                            works under pressure.
                        </p>
                        <p>
                            I care about maintainable code, thoughtful design, and shipping work that feels memorable the first time
                            someone uses it. If you need a builder who can move from concept to launch, I am ready.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-facts"
                        variants={fade}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.35 }}
                    >
                        <div><strong>Birthday</strong>Oct 9</div>
                        <div><strong>Nationality</strong>Nepali</div>
                        <div><strong>Phone</strong>+91 9373532312</div>
                        <div><strong>Email</strong>Saurabhthakulla6@gmail.com</div>
                        <div><strong>Address</strong>Tikapur, Nepal</div>
                        <div><strong>Role</strong>Software Engineer</div>
                    </motion.div>

                    <motion.div
                        className="about-actions"
                        variants={fade}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.35 }}
                    >
                        <a className="btn outline" href="#projects"><span>See My Work</span></a>
                        <a className="btn primary" href="#contact"><span>Hire Me</span></a>
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

// -- Saurabh`}
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
