const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">Saurabh.dev</span>
        <span className="footer-text">
          &copy; {new Date().getFullYear()} Building memorable digital products with code, clarity, and style.
        </span>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
