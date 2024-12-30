import "./App.css";
import Temp from "./components/Temp"
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skill.jsx";
import Projects from "./components/Projects.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Contact from "./components/contact.jsx";
import { useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Footer from "./components/footer";


function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    // Scrolls to top of the page on initial render
    scrollToTop();
  }, []);

  return (
    <div className=" mb-2  ">
      <Navbar />
      <section id="temp" className="">
        <Temp />
      </section>
      <section id="about" className="">
        <About />
      </section>
      <section id="skills" className="container">
        <Skills />
      </section>
      <section id="projects" className="">
        <Projects />
      </section>
      <section id="testimonial" className="">
        <Testimonial />
      </section>
      <section id="contact" className="">
        <Contact />
      </section>
      <Footer />
      <ScrollLink
        to="home"
        smooth={true}
        offset={-70}
        duration={500}
        className="scroll-to-top"
      >
        <i className="fas fa-chevron-up"></i>
      </ScrollLink>
    </div>
  );
}

export default App;