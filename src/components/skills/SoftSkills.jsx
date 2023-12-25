import React from "react";

const SoftSkills = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Softwares</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="uil uil-bolt icon__box"></i>

            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="uil uil-bolt icon__box"></i>

            <div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="uil uil-bolt icon__box"></i>

            <div>
              <h3 className="skills__name">PostgreSQL</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="uil uil-bolt icon__box"></i>

            <div>
              <h3 className="skills__name">Photoshop</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="uil uil-bolt icon__box"></i>

            <div>
              <h3 className="skills__name">Illustrator</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="uil uil-bolt icon__box"></i>

            <div>
              <h3 className="skills__name">GitHub Desktop</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
