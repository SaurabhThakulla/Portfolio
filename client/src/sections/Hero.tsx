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
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section className="hero" id="home" ref={heroRef}>
            <div className="hero-ghost-text">HELLO</div>

            <motion.div
                className="hero-grid"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
            >
                <div className="hero-content">
                    <p className="hero-kicker">I&apos;M</p>
                    <h1 className="hero-title">
                        Saurabh <span>Thakulla</span>
                    </h1>

                    <p className="hero-sub">
                        Software Engineer <span>|</span> Frontend Specialist <span>|</span> Backend Expert <span>|</span> DSA Enthusiast <span>|</span> Tech Explorer
                    </p>

                    <button className="btn primary">
                        <svg
                            className="btn-icon"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 3v14m0 0l-4.5-4.5M12 17l4.5-4.5M5 20h14"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Download CV
                    </button>
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
                        <img src={img} alt="Aashis Jha" />
                    </div>
                    <div className="hero-figure__ink hero-figure__ink--orange"></div>
                    <div className="hero-figure__ink hero-figure__ink--blue"></div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
