import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
};

const Contact = () => {
  return (
    <motion.section
      className="contact"
      id="contact"
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="contact-bg">CONTACT</div>
      <div className="contact-header">
        <span className="pill">Let&apos;s Talk</span>
        <h2>Contact Me</h2>
        <p>Got a project, collaboration, or question? Drop a note and I&apos;ll respond quickly.</p>
      </div>

      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <textarea name="message" rows={6} placeholder="Write Your Message" required />
        <button type="submit" className="btn primary">Submit</button>
      </form>
    </motion.section>
  );
};

export default Contact;
