import React, { useState } from 'react'
import './services.css'

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Professional Experience</h2>
      <span className='section__subtitle'>Experiences I have Acquired</span>

      <div className='services__container container grid'>
        <div className='services__content'>
            <div>
              <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Trainee<br />SQA Engineer</h3>
            <a className='services__subtitle' href="https://cdip.uiu.ac.bd" target="_blank" rel="noopener noreferrer">CDIP,<br/> United Interantional University</a>
            </div>

          <span className="services__button"
                onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            
            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}></i>

                <h3 className="services__modal-title">Trainee SQA Engineer</h3>
                <p className="services__modal-description">
                Currently enrolled in Software Quality Assurance & Testing course conducted by <a href="https://cdip.uiu.ac.bd" target="_blank" rel="noopener noreferrer"><b>CDIP, United International University</b></a>, Dhaka.
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
                    <p className="services__modal-info">
                      Database Testing
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      API Testing
                    </p>
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
        </div>
        
        <div className='services__content'>
            <div>
              <i className="uil uil-arrow services__icon"></i>
              <h3 className="services__title">Undergraduate<br />Teaching Assistant</h3>
              <a className='services__subtitle' href="https://www.uiu.ac.bd" target="_blank" rel="noopener noreferrer">United International University</a>
            </div>

          <span className="services__button"
                onClick={() => toggleTab(2)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            
            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}></i>

                <h3 className="services__modal-title">Undergraduate Teaching Assistant</h3>
                <p className="services__modal-description">
                  Currently employed as an Undergraduate Assistant(UA) at <a href="https://uiu.ac.bd" target="_blank" rel="noopener noreferrer"><b>United International University.</b></a>

                </p>

                <ul className="services__modal-services grid">

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I had the privilage to offer guidance to students who were new to programming.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Explaining the concepts of C Language, conducting problem solving sessions & providing assistance.
                    </p>
                </li>
                
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Teaching them the tricks of programming that helped me out in my first-year of university.
                    </p>
                  </li>

                </ul>

            </div>
          </div>
        </div>
          
        <div className='services__content'>
            <div>
              <i className="uil uil-edit services__icon"></i>
              <h3 className="services__title">Graphics &<br />UI Designer</h3>
            </div>

          <span className="services__button"
                onClick={() => toggleTab(3)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            
            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}></i>

                <h3 className="services__modal-title">Graphics & UI Designer</h3>
                <p className="services__modal-description">
                  From 2019 to 2022, I provided service as a Graphics/UI Designer to make exceptional UI designs, logo creations, and banner designs etc. This period allowed me to refine my skills, learn industry grade tools and deliver high-quality works, and build a strong portfolio showcasing my creative expertise in graphic design.
                </p>

                <ul className="services__modal-services grid">

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Designed User Interfaces | <strong>Figma</strong> 
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Designed Logos & Business Cards | <strong>Illustrator</strong>
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Designed Product Pamphlets and Covers
                    </p>
                  </li>

                </ul>

            </div>
          </div>
        </div>
        
      </div>
    </section>
      
  )
}

export default Services