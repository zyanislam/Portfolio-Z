import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="uil uil-graduation-cap about__icon"></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">BSc. in CSE</span> <br />
        <span className="about__subtitle">CGPA 3.75 / 4.00</span>
      </div>

      <div className="about__box">
        <i class="uil uil-layers about__icon"></i>
        <h3 className="about__title">Work Experience</h3>
        <span className="about__subtitle">Software Eng.</span> <br />
        <span className="about__subtitle">7 months</span>
      </div>

      <div className="about__box">
        <i class="bx bxs-bolt-circle about__icon2"></i>
        <h3 className="about__title">Projects Completed</h3>
        <span className="about__subtitle">15+ Projects</span>
      </div>
    </div>
  );
};

export default Info;
