import React from 'react';
import '../App.css';
import Tempgif from '../img/Tempimg.gif';

function Temp() {
  const handleResumeClick = () => {
    console.log('Resume button clicked. Implement your logic here.');
  };

  return (
    // Added mt-5 for top margin and mb-5 for bottom margin to the temp div
    <div id="temp" className="temp mt-5 mb-5">
      <div className="container">
        <div className="row">
          {/* Image column - Adjusted mt-5 to mt-3 for a smaller top margin on mobile, keeping order-md-2 */}
          <div className="col-md-6 order-md-2 mt-3">
            <img src={Tempgif} alt="Temp" className="img-fluid"/>
          </div>
          {/* Text column - Adjusted the margins for consistency */}
          <div className="col-md-6 order-md-1 mt-3">
            <h1>WEB DEVELOPER</h1>
            <h4>Hi, I'm Yerosen</h4>
            <p>
              Experienced in web design and development, producing quality work.
              Assisting people in creating websites and applications based on their
              ideas.
            </p>
            <button className="btn-hover color-3" onClick={handleResumeClick}>
              Resume <i className="uil uil-clipboard-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temp;
