import React from "react";
import pro3 from "../img/project3.png";
import kokeeti from "../vid/kokeeti.webm";

const Projects = () => {
  return (
    <div className="projects py-auto text-white"> 
      <div className="container">
        <div className="d-flex justify-content-around mb-4"> 
          <h1>Projects</h1>
        </div>
        <div className="row my-4"> 
          <div className="col-md-6 mb-3">
          <iframe
  src="https://yerotad.github.io/Astroid-game/"
  frameBorder="0"
  style={{ overflow: "hidden" }} // Hides overflow (scrollbars)
></iframe>
          </div>
          <div className="col-md-6 d-flex align-items-center"> 
            <h2>Description of Project 1</h2> 
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-6 order-md-2 mb-3"> 
            <video width="100%" controls>
              <source src={kokeeti} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-md-6 order-md-1 d-flex align-items-center">
            <h2>Description of Project 2</h2>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-6 mb-3">
            <img src={pro3} alt="Another Project" className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <h2>Description of Project 3</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
