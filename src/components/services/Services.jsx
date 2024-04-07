import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="experiences">
      <h2 className="section__title">Professional Experience</h2>
      <span className="section__subtitle">Experiences I have Acquired</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Software Engineer</h3>
            <p className="services__subtitle2">2023 - Present</p>
            <a
              className="services__subtitle"
              href="https://www.reddotdigitalit.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              RedDot Digital Limited (Robi Axieta)
            </a>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">Software Engineer</h3>
              <p className="services__modal-description">
                Currently working as a Software Engineer at{" "}
                <a
                  href="https://www.reddotdigitalit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links"
                >
                  <b>RedDot Digital Limited</b>
                </a>
                , Gulshan 1, Dhaka.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Responsibility to design and revamping the RedDot Digital
                    Website | <strong>WordPress</strong> .
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Migration of Robi Axiata's existing{" "}
                    <strong>Processmaker</strong> tasks to the updated version.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Containerizing projects like{" "}
                    <strong>Robi Shareholder Management System (RSMS)</strong>{" "}
                    and <strong>ProcessMaker</strong> through{" "}
                    <strong>Docker CLI</strong> , while also acquiring skills to
                    function as the team's DevOps Engineer.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Created the UI design for an upcoming project for Unilever
                    Limited while adhering to industry standards and principles
                    | <strong>Figma</strong>
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Gained hands on experience with technologies like WordPress,
                    Docker, Odoo, Designing Tools like Figma and Illustrator and
                    lastly worked the frontend side of Robi Shop Page.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Trainee
              <br />
              SQA Engineer
            </h3>
            <a
              className="services__subtitle"
              href="https://cdip.uiu.ac.bd"
              target="_blank"
              rel="noopener noreferrer"
            >
              CDIP,
              <br /> United Interantional University
            </a>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">Trainee SQA Engineer</h3>
              <p className="services__modal-description">
                Currently enrolled in Software Quality Assurance & Testing
                course conducted by{" "}
                <a
                  href="https://cdip.uiu.ac.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>CDIP, United International University</b>
                </a>
                , Dhaka.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Automation Testing (Selenium)
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Database Testing</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">API Testing</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Functional & Non-Functional Testing
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              UI / UX <br /> Developer
            </h3>
            <p className="services__subtitle2">2019 - Present</p>
            <span className="services__subtitle">
              Freelancing &{" "}
              <a
                className="services__subtitle"
                href="https://www.reddotdigitalit.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                RedDot Digital Limited (Robi Axieta)
              </a>
            </span>
          </div>

          <span className="services__button" onClick={() => toggleTab(4)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 4
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">Graphics Designer</h3>
              <p className="services__modal-description">
                From 2019 to 2022, I provided service as a Graphics & UI
                Designer where I made mockups of UI designs, personalized logos
                and creative banners and posters for events. This period allowed
                me to refine my skills, learn industry grade tools and deliver
                high-quality works, and build a strong portfolio showcasing my
                creative expertise in graphic design.
              </p>

              <h3 className="services__modal-title">UI / UX Developer</h3>
              <p className="services__modal-description">
                <a
                  className="services__subtitle"
                  href="https://www.reddotdigitalit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RedDot Digital Limited (Robi Axieta)
                </a>
                Since 2023 to the present, I have had the valuable opportunity
                to harness my creative potential and participate in meaningful
                collaboration with an experienced Professional UI Designer on
                tangible projects.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Revamp UI Design of RedDot's webpage |{" "}
                    <strong>Figma & WordPress</strong>
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Designing personalized logos, business cards, banners etc. |{" "}
                    <strong>Illustrator & Figma</strong>
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Making UI mockups with User Stories, for web & mobile
                    application. | <strong>Behance & Figma</strong>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Undergraduate
              <br />
              TA
            </h3>
            <p className="services__subtitle2">June - September 2023</p>
            <a
              className="services__subtitle"
              href="https://www.uiu.ac.bd"
              target="_blank"
              rel="noopener noreferrer"
            >
              United International University
            </a>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">
                Undergraduate Teaching Assistant
              </h3>
              <p className="services__modal-description">
                During my last semester, I was employed as an Undergraduate
                Teaching Assistant(UTA) at{" "}
                <a
                  href="https://uiu.ac.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links"
                >
                  <b>United International University.</b>
                </a>
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I had the privilage to offer guidance to students who were
                    new to programming.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Explaining the concepts of C Language, conducting problem
                    solving sessions & providing assistance.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Teaching them the tricks of programming that helped me out
                    in my first-year of university.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
