function Navbar(){
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Saurabh
        <span>.dev</span>
      </a>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a className="btn" href="#contact"><span>Book a Call</span></a>
    </nav>
  );
}

export default Navbar;
