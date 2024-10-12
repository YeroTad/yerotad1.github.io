import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark align-items-center text-white">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse " + (navbarOpen ? "show" : "")} id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center">
            <li className="nav-item">
              <ScrollLink
                to="home"
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link p-2 ms-5"
                onClick={scrollToTop}
              >
                Home
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="about"
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link p-2 ms-5"
              >
                About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="skills"
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link p-2 ms-5">
                Skills
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="projects"
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link p-2 ms-5"
              >
                Projects
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="testimonial"
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link p-2 ms-5"
              >
                Testimonial
              </ScrollLink></li>
            <li className="nav-item">
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link p-2 ms-5"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;