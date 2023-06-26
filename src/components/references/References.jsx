import React from 'react'
import "./references.css"
import { Data } from './Data'

const References = () => {
  return (
    <section className='references container section' id='references'>
      <h2 className='section__title'>References</h2>
      <span className='section__subtitle'> Professionals who can vouch for my skills and work history</span>

      <div className='references__container'>
              {Data.map(({ id, title, designation, institution, email }) => {
                  return (
                    <div className='reference_card' key={id}>
                          <h3 className='reference__name'>{title}</h3>
                          <h4 className='reference__desig'>{designation}</h4>
                          <h4 className='reference__insti'>{institution}</h4>
                          <h4 className='reference__email'>{email}</h4>
                    </div>
            )
        })}
      </div>
    </section>
  )
}

export default References