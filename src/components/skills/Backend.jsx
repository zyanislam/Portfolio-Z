import React from 'react'

const Backend = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Backend Developer</h3>
        
      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i class="uil uil-bolt-alt icon__box"></i>
            
            <div>
              <h3 className='skills__name'>PHP</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
                
          <div className='skills__data'>
            <i class="uil uil-bolt-alt icon__box"></i>
            
            <div>
              <h3 className='skills__name'>mySQL</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i class="uil uil-bolt-alt icon__box"></i>
                    
            <div>
              <h3 className='skills__name'>Python</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>     
        </div>
      </div>
    </div>
  )
}

export default Backend