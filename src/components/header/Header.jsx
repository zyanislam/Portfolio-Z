import React from 'react'
import "./header.css"
import { useState } from "react"

const Header = () => {
  const [Toggle, showMenu] = useState(false);

    return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo"><u>Fahad</u></a>
                
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__me">
                    <li className="nav__list grid">
                        <a href="#home" className="nav__link nav__active">
                            <i class="uil uil-estate nav__icon">
                            </i> Home
                        </a>
                    </li>
                    <li className="nav__list grid">
                        <a href="#about" className="nav__link">
                            <i class="uil uil-user nav__icon">
                            </i> About Me
                        </a>
                    </li>
                    <li className="nav__list grid">
                        <a href="#skills" className="nav__link">
                            <i class="uil uil-bolt nav__icon">
                            </i> Skills
                        </a>
                        </li>
                    <li className="nav__list grid">
                        <a href="#services" className="nav__link">
                            <i class="uil uil-location-arrow nav__icon">
                            </i> Experience
                        </a>
                    </li>
                    <li className="nav__list grid">
                        <a href="#contact" className="nav__link">
                            <i class="uil uil-message nav__icon">
                            </i> Contact
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
            <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header