import React from 'react'

const Contacts = () => {
  return (
    <section className='contacts section' id='contacts'>
      <h2 className='section__title'>Contact Details</h2>
      <span className='section__subtitle'>Ways to get in touch with me</span>
      
        <div className='contact__container container grid'>
        
          <div className='contact__content'>
            <h3 className='contact__title'>Talk to me</h3>

            <div className='contact__info'>
              <div className='contact__card'>
                <i className='bx bx contact__card-icon'></i>
              
                <h3 className='contact__card-title'>Email</h3>
                <span className='contact__card-data'>sheikh.zyanislam@gmail.com</span>
              
              <a href="mailto:sheikh.zyanislam@gmail.com.com" className='contact__button'>Write me {""}<i className='bx bx-right-arrow-alt contact__button-icon'></i> </a>
              </div>

              <div className='contact__card'>
                <i className='bx bx contact__card-icon'></i>
              
                <h3 className='contact__card-title'>WhatsApp</h3>
                <span className='contact__card-data'>8801616696562</span>
              
              <a href="" className='contact__button'>Write me {""}<i className='bx bx-right-arrow-alt contact__button-icon'></i> </a>
              </div>

              <div className='contact__card'>
                <i className='bx bx contact__card-icon'></i>
              
                <h3 className='contact__card-title'>Messenger</h3>
                <span className='contact__card-data'>amazzyan</span>
              
              <a href="" className='contact__button'>Write me {""}<i className='bx bx-right-arrow-alt contact__button-icon'></i> </a>
              </div>
            </div>

          </div>

          <div className='contact__content'>
            <h3 className='contact__title'>Write me your project</h3>
          </div>
        
          <div className='contact__content'>
            <h3 className='contact__title'></h3>
          </div>
          
        </div>
    </section>
      
  )
}

export default Contacts