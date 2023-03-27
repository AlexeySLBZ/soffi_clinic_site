import React from 'react';
import './carousel.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import lpg_body from './slide_lpg_body.webp';
import lpg_face from './Slide_LPG_Fase.webp';
import massage from './slide_massage1.webp';
import injection from './slide_injection.webp';
import sale from './slide_salle.webp';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function CarouselSlider () {

  return (
    <div className='swiper-slide'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{delay:3000}}
        // scrollbar={{ draggable: true }}
        autoHeight ={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img src={lpg_face} alt='lpg_face'/></SwiperSlide>
        <SwiperSlide><img src={lpg_body} alt='lpg_body'/></SwiperSlide>
        <SwiperSlide><img src={sale} alt ='sale'/></SwiperSlide>
        <SwiperSlide><img src={massage} alt ='massage'/></SwiperSlide>
        <SwiperSlide><img src={injection} alt ='injection4'/></SwiperSlide>
      </Swiper>
    </div>

  );
};


export default CarouselSlider;

