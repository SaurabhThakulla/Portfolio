import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App(){
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
