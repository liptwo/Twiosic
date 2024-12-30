import React, { useEffect } from 'react'

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow , Pagination, Navigation} from 'swiper/modules';

import slide_image_1 from '../assets/images/thumnail1.webp'
import slide_image_2 from '../assets/images/thumnail2.webp'
import slide_image_3 from '../assets/images/thumnail3.webp'
import slide_image_4 from '../assets/images/thumnail4.webp'
import slide_image_5 from '../assets/images/thumnail5.webp'
const slide_array = [
  slide_image_1, slide_image_2, slide_image_3, slide_image_4,slide_image_5 ,
]

const HeroBanner = () => {

  const handleHidden = ()=>{
    const needhidden = document.getElementsByClassName("swiper-slide-active need-hidden");
    needhidden.toggleClass("hidden");
  }
  // useEffect(() => {
  //   handleHidden();
  // }, [12])
  

  return (
    <div className=' container h-[40vh] w-[100wh] px-16 py-4 mx-0 my-auto bg-black scroll-smooth'>
        <Swiper
        effect={'coverflow'}
         grabCursor={true}
         centeredSlides={true}
         loop={true}
         slidesPerView={'auto'}
         coverflowEffect={{
           rotate: 0,
           stretch: 100,
           depth:90,
           modifier: 2.5,
           slideShadows: true,
         }}
         autoplay={{
          delay:300,
          disableOnInteraction:false,
         }}
         pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
         >
          {slide_array.map((slide_image)=>(
              <SwiperSlide>
                <div className=''>
                  <div>
                    <img className='w-[20rem] shadow-inner' src={slide_image} alt="slide_image" />
                  </div>
                  
                </div>
                <div className={`text-white need-hidden  flex flex-row relative left-[2rem] top-[-5rem] items-center`}>
                    <div>
                      <h1 className=''>EChoes of Midnight</h1>
                      <span className=''>Jon Hickman</span>
                    </div>
                    <div  className='ml-8'> 
                      <i className="scale-150 fa fa-play-circle" aria-hidden="true"></i>
                    </div>
                  </div>
              </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default HeroBanner