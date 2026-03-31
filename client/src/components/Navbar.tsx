function Navbar(){
  return (
    <nav className="navbar">
      <h1 className="logo">Saurabh</h1>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="btn"><span>Hire Me</span></button>
    </nav>
  );
}

export default Navbar;
