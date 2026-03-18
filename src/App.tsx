import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
