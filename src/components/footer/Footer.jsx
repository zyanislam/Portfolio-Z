import React from 'react'
import './footer.css'

const Footer = () => {
  return (
      <footer className='footer'>
          <div className='footer__container container'>
            <h1 className='footer__title'>Sheikh Fahad</h1>
            
            <ul className='footer__list'> 
                <li>
                    <a href="#" className='footer__link'></a>
                </li>
                <li>
                    <a href="#" className='footer__link'></a>
                </li>
                <li>
                    <a href="#" className='footer__link'></a>
                </li>
            </ul>
            
        </div>
      </footer>
  )
}

export default Footer