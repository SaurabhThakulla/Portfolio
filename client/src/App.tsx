import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { useLenis } from "./hooks/useLenis";

function App(){
  useLenis();
  return (
    <div className="app-shell">
      <div className="app-shell__bg" aria-hidden="true">
        <span className="app-shell__grid"></span>
        <span className="app-shell__glow app-shell__glow--one"></span>
        <span className="app-shell__glow app-shell__glow--two"></span>
        <span className="app-shell__glow app-shell__glow--three"></span>
      </div>

      <Navbar />
      <Sidebar />
      <main className="page-content">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
