import React from 'react'
import "./references.css"
import { Data } from './Data'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const References = () => {
  return (
    <section className='references container section' id='references'>
      <h2 className='section__title'>References</h2>
      <span className='section__subtitle'> Professionals who can vouch for my skills and work history</span>

          <Swiper className='references__container'
            loop={true}
            grabCursor={true}
            spaceBetween={24}
              
            pagination={{
                clickable: true,
            }}
              
            breakpoints={{
                576: {
                slidesPerView: 2,
                },
                768: {
                slidesPerView: 2,
                spaceBetween: 48,
                },
            }}
          modules={[Pagination]}>
              {Data.map(({ id, title, designation, institution, email }) => {
                  return (
                    <SwiperSlide className='reference__card' key={id}>
                          <h2 className='reference__name'>{title}</h2>
                          <h4 className='reference__desig'>{designation}</h4>
                          <h4 className='reference__insti'>{institution}</h4>
                          <h4 className='reference__email'>Email: {email}</h4>
                    </SwiperSlide>
            )
        })}
      </Swiper>
    </section>
  )
}

export default References