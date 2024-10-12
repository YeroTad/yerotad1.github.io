import React from "react";
import icon6 from "../img/icon6.svg";
import icon7 from "../img/icon7.svg";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="d-flex justify-content-center">
          <h1>Contact</h1>
        </div>
        <div className="row">
          <div className="col">
            <div className=" d-flex align-content-start flex-wrap">
              <img src={icon6} alt="icon6" style={{ width: "50px" }} />
              <div class="">
                <h5 className="ms-3 mt-5">Email</h5>
                <p className="ms-3 mb-5 text-muted">Tadyero@gmail.com</p>
              </div>
            </div>
            <div className="d-flex align-content-start flex-wrap">
              <img src={icon7} alt="icon6" style={{ width: "50px" }} />
              <div class="">
                <h5 className="ms-3 mt-5">Call Me</h5>
                <p className="ms-3 mb-5 text-muted">+1(289)941 0751 </p>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="">
              <form action="POST">
                <div className="d-flex justify-content-around mb-2 mt-3">
                  <input
                    id="name"
                    alt="Name"
                    type="text"
                    className="form-control me-"
                    placeholder="Name"
                  ></input>
                  <input
                    id="email"
                    alt="email"
                    type="text"
                    className="form-control ms-2"
                    placeholder="Email"
                  ></input>
                </div>
                <div className="d-flex justify-content-around">
                  <textarea
                    class="form-control"
                    id="message"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="contact-button">
                  {/* <button type="submit" class="button-69 mb-5" role="button">
                    Submit <i class="uil uil-message"></i>
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
