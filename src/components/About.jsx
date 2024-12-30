import React from "react";
import Aboutsvg from "../img/About.png";

function About() {
  return (
    // Added py-5 for padding top and bottom to the about div for more space
    <div className="about py-5">
      <div className="container">
        <div className="d-flex justify-content-around mb-4"> {/* Added bottom margin to h1 container */}
          <h1>About</h1>
        </div>
        
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex justify-content-around mb-4"> {/* Added bottom margin for spacing between image and text */}
              <img src={Aboutsvg} alt="About" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="d-flex justify-content-around text-muted mb-3"> {/* Adjusted spacing for introduction h4 */}
              <h4>Introduction</h4>
            </div>
            <p>
              I am an experienced web developer and I bring creativity,
              curiosity, and problem-solving skills to every challenge that I
              take on. I'm committed to quality work that is well-designed for
              content consumption across all platforms. My experience has shown
              me how important it is for developers to collaborate with others
              so that their ideas can be brought to life on the web and across
              social media channels.
            </p>
            <div className="d-flex justify-content-around mx-auto mt-4"> {/* Added top margin for spacing between text and the experience points */}
              <p>
                +03 <br /> Years Experience
              </p>
              <p className="ms-5">
                +03 <br />
                Completed Projects
              </p>
              <p className="ms-5">
                +03 <br /> Companies Worked
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
