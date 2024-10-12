import React, { useState } from "react";
import icon1 from "../img/icon1.svg";
import icon2 from "../img/icon2.svg";

const Skill = () => {
  const [skills, setSkill] = useState({
    html: "0%",
    css: "0%",
  });

  setTimeout(() => {
    setSkill({ html: "90%", css: "80%" });
  }, 1000);

  return (
    <div className="container space skill ">
      <div className="text-center text-black">
        <h1>Skills</h1>
        <p className="text-muted">My technical level</p>
      </div>
      <div className="row">
        <div className="col-sm-6 ">
          <div className="">
            <h3>
              <img src={icon1} style={{ width: "7%" }} alt="icon1" />
              Frontend developer
            </h3>
            <p class="text-muted ">More than 2 years</p>
          </div>

          <ul class="list-group">
            <li class="list-group-item bg-white text-black ">
              <div className="row">
                <div class="col-sm-6">
                  <p>HTML</p>
                </div>
                <div class="col-sm-6">
                  <p className="text-end text-muted">{skills.html}</p>
                </div>
              </div>
              <div class="progress" style={{ height: "4px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{
                    width: skills.html,
                    backgroundColor: "#9553A0",
                    transition: "1s",
                  }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <br></br>

              <div className="row">
                <div class="col-sm-6">
                  <p>CSS</p>
                </div>
                <div class="col-sm-6">
                  <p className="text-end text-muted">80%</p>
                </div>
              </div>
              <div class="progress" style={{ height: "4px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: skills.css, backgroundColor: "#9553A0" }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <br></br>
              <div className="row">
                <div class="col-sm-6">
                  <p>JavaScript</p>
                </div>
                <div class="col-sm-6">
                  <p className="text-end text-muted">75%</p>
                </div>
              </div>
              <div class="progress" style={{ height: "4px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "75%", backgroundColor: "#9553A0" }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <br></br>
              <div className="row">
                <div class="col-sm-6">
                  <p>React</p>
                </div>
                <div class="col-sm-6">
                  <p className="text-end text-muted">80%</p>
                </div>
              </div>
              <div class="progress" style={{ height: "4px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "80%", backgroundColor: "#9553A0" }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <br></br>
              <div className="row">
                <div class="col-sm-6">
                  <p>Angular</p>
                </div>
                <div class="col-sm-6">
                  <p className="text-end text-muted">76%</p>
                </div>
              </div>
              <div class="progress" style={{ height: "4px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "75%", backgroundColor: "#9553A0" }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <br></br>
              <div className="row">
                <div class="col-sm-6">
                  <p>WordPress</p>
                </div>
                <div class="col-sm-6">
                  <p className="text-end text-muted">90%</p>
                </div>
              </div>
              <div class="progress" style={{ height: "4px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "90%", backgroundColor: "#9553A0" }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <br></br>
            </li>
          </ul>
        </div>

        <div className="col-sm-6">
          <div className="">
            <h3>
              <img src={icon2} style={{ width: "7%" }} alt="icon2" />
              Backend developer
            </h3>
            <p class="text-muted ">More than 2 years</p>
          </div>

          <ul class="list-group">
            <li class="list-group-item bg-white text-black ">
              <div className="row">
                <div class="col-sm-6">
                  <p>PHP</p>
                </div>
                <div class="col-sm-6">
                  <p className="text-end text-muted">90%</p>
                </div>
              </div>
              <div class="progress  " style={{ height: "4px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "90%", backgroundColor: "#9553A0" }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <br></br>

              <div className="row">
                <div class="col-sm-6">
                  <p>Node js</p>
                </div>
                <div class="col-sm-6">
                  <p className="text-end text-muted">80%</p>
                </div>
              </div>
              <div class="progress" style={{ height: "4px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "80%", backgroundColor: "#9553A0" }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <br></br>
              <div className="row">
                <div class="col-sm-6">
                  <p>Firebase</p>
                </div>
                <div class="col-sm-6">
                  <p className="text-end text-muted">85%</p>
                </div>
              </div>
              <div class="progress" style={{ height: "4px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "85%", backgroundColor: "#9553A0" }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <br></br>
              <div className="row">
                <div class="col-sm-6">
                  <p>MySql</p>
                </div>
                <div class="col-sm-6">
                  <p className="text-end text-muted">80%</p>
                </div>
              </div>
              <div class="progress" style={{ height: "4px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "80%", backgroundColor: "#9553A0" }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <br></br>
              <div className="row">
                <div class="col-sm-6">
                  <p>MongoDb</p>
                </div>
                <div class="col-sm-6">
                  <p className="text-end text-muted">80%</p>
                </div>
              </div>
              <div class="progress" style={{ height: "4px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "80%", backgroundColor: "#9553A0" }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <br></br>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;