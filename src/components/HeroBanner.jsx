import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_6 from "../assets/images/thumnail6.png";
import slide_image_1 from "../assets/images/thumnail1.webp";
import slide_image_2 from "../assets/images/thumnail2.webp";
import slide_image_3 from "../assets/images/thumnail3.webp";
import slide_image_4 from "../assets/images/thumnail4.webp";
import slide_image_5 from "../assets/images/thumnail5.webp";
const slide_array = [
  slide_image_6,
  slide_image_1,
  slide_image_2,
  slide_image_3,
  slide_image_4,
  slide_image_5,
];
import song from '/odorikominji.mp3'

const HeroBanner = ({setBaiHat}) => {
  const handleHidden = () => {
    const needhidden = document.getElementsByClassName(
      "swiper-slide-active need-hidden"
    );
    needhidden.toggleClass("hidden");
  };
  // useEffect(() => {
  //   handleHidden();
  // }, [12])

  return (
    <div className=" flex justify-center box-border items-center h-[40vh] px-16 py-4 mx-auto my-auto bg-black overflow-hidden scroll-smooth">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 90,
          modifier: 2.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 300,
          disableOnInteraction: false,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {slide_array.map((slide_image,index) => (
          <SwiperSlide key={index}>
            <div className="">
              <div>
                <img
                  className="w-[20rem] shadow-inner"
                  src={slide_image}
                  alt="slide_image"
                />
              </div>
            </div>
            <div className="text-white need-hidden justify-between w-[15rem] hidden flex-row relative left-[2rem] top-[-5rem] items-center">
              <div>
                <h1 className="title">Odoriko</h1>
                <span className="title"> MINJI-(뉴진스) </span>
              </div>
              <button className="button ml-8 " onClick={()=>setBaiHat(song)}>
                <PlayCircleIcon
                  sx={{
                    fontSize:{
                    xs: 20, // kích thước icon khi màn hình nhỏ (dưới 600px)
                    sm: 30, // kích thước icon khi màn hình từ 600px đến 960px
                    md: 40, // kích thước icon khi màn hình từ 960px đến 1280px
                    lg: 50,
                  }}}
                ></PlayCircleIcon>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroBanner;
