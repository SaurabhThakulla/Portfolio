const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">Saurabh</span>
        <span className="footer-text">
          © {new Date().getFullYear()} • Crafting code & design with care.
        </span>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
