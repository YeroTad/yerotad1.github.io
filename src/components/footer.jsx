import React from "react";
import github from "../img/social-git.png";
import link from "../img/social-link.png";
import twi from "../img/social-twi.png";
import whts from "../img/social-whts.png";
function Footer() {
  return (
    <div>
      <div id="footer" className="text-center text-muted ">
        <div class="pt-4 footer ">
          {/* <!-- Section: Social media --> */}
          <section class="pb-2 ">
            <a href="https://github.com/YeroTad/">
              <img
                className="me-4"
                src={github}
                style={{ width: "40px" }}
                alt="github"
              />
            </a>

            <a href="https://twitter.com/your_twitter_profile">
              <img
                className="me-4"
                src={twi}
                style={{ width: "40px" }}
                alt="twitter"
              />
            </a>

            <a href="https://www.linkedin.com/in/your_linkedin_profile/">
              <img
                className="me-4"
                src={link}
                style={{ width: "40px" }}
                alt="linkedin"
              />
            </a>

            <a href="https://web.whatsapp.com/">
              <img
                className="me-4"
                src={whts}
                style={{ width: "40px" }}
                alt="whatsapp"
              />
            </a>
          </section>
        </div>
        <div class="text-center text-dark">
          © 2023 Copyright:
          <a class="text-dark" href="https://yerotad.github.io">
            Yerotad.github.io
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
