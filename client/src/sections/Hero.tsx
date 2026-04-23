import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import img from "../assets/hero.png";

const Hero = () => {
    const heroRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;

        let rafId = 0;
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;

        const onMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const mx = (e.clientX - (rect.left + rect.width / 2)) / rect.width; // ~ -0.5 to 0.5
            const my = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
            // invert so the text moves opposite to cursor
            targetX = -mx * 2; // -1 to 1 scaled (inverted)
            targetY = -my * 2;
        };

        const animate = () => {
            currentX += (targetX - currentX) * 0.12;
            currentY += (targetY - currentY) * 0.12;
            el.style.setProperty("--hero-mx", currentX.toString());
            el.style.setProperty("--hero-my", currentY.toString());
            rafId = requestAnimationFrame(animate);
        };

        animate();
        window.addEventListener("mousemove", onMove);
        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, easeOut: true } },
    };

    return (
        <section className="hero" id="home" ref={heroRef}>
            <div className="hero-ghost-text">LEVEL UP</div>

            <motion.div
                className="hero-grid"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
            >
                <div className="hero-content">
                    <p className="hero-kicker">Neon-ready product engineer</p>
                    <h1 className="hero-title">
                        Saurabh <span>Thakulla</span>
                    </h1>

                    <p className="hero-sub">
                        I design polished frontend experiences, dependable backend systems, and AI-powered workflows that feel fast, modern, and production-ready.
                    </p>

                    <div className="hero-actions">
                        <a className="btn primary" href="#projects">
                            <span>View Projects</span>
                        </a>
                        <a className="btn outline" href="#contact">
                            <span>Start a Project</span>
                        </a>
                    </div>

                    <div className="hero-badges">
                        <span>Frontend systems</span>
                        <span>Backend architecture</span>
                        <span>Devops</span>
                    </div>
                </div>

                <motion.div
                    className="hero-figure"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                >
                    <div className="hero-figure__halo"></div>
                    <div className="hero-figure__img">
                        <img src={img} alt="Saurabh Thakulla portrait" />
                    </div>
                    <div className="hero-figure__ink hero-figure__ink--orange"></div>
                    <div className="hero-figure__ink hero-figure__ink--blue"></div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
