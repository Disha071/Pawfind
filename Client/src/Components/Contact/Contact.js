import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:dishaguptaa77@gmail.com">
          dishaguptaa77@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="www.linkedin.com/in/disha-gupta-2a0933275">
          User Name: DishaGupta
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/Disha071">
          Disha071
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/petfedindia?igsh=MWdsMmdydWRwbjI0">
          Pet-Adopt
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+923019583959">
          +92 301 9583959
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
