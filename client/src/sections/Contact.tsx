import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

const fade = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
};

const Contact = () => {
  const [status, setStatus] = useState<{ state: "idle" | "loading" | "success" | "error"; message: string }>({
    state: "idle",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey) {
      setStatus({ state: "error", message: "Missing Web3Forms key. Add VITE_WEB3FORMS_KEY in your .env." });
      return;
    }

    setStatus({ state: "loading", message: "Sending..." });

    try {
      const formData = new FormData(form);
      formData.append("access_key", accessKey);
      formData.append("subject", "New portfolio contact");
      formData.append("from_name", "Portfolio Contact Form");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ state: "success", message: "Message sent. I will reply soon." });
        form.reset();
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch {
      setStatus({ state: "error", message: "Send failed. Please try again." });
    }
  };

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
        <h2>Ready to Build Something Strong?</h2>
        <p>Share your idea, product, or collaboration plan and I will get back to you with a clear next step.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <textarea name="message" rows={6} placeholder="Tell me about your project" required />
        <button type="submit" className="btn primary" disabled={status.state === "loading"}>
          <span>{status.state === "loading" ? "Sending..." : "Send Message"}</span>
        </button>
        {status.message && (
          <p className={`contact-status ${status.state}`}>
            {status.message}
          </p>
        )}
      </form>
    </motion.section>
  );
};

export default Contact;
