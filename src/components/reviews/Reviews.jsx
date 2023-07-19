import React, {useEffect, useState} from 'react';
import "./reiews.css"

import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import {Navigation, Pagination, A11y, Autoplay, EffectCards, EffectCoverflow} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


import review1 from "./img/WhatsApp Image 2023-03-28 at 13.54.45 (2).webp"
import review2 from "./img/WhatsApp Image 2023-03-28 at 13.54.45 (1).webp"
import review3 from "./img/WhatsApp Image 2023-03-28 at 13.54.26 (2).webp"
import review4 from "./img/WhatsApp Image 2023-03-28 at 13.54.25.webp"
import review5 from "./img/WhatsApp Image 2023-03-28 at 13.54.45.webp"
import review6 from "./img/WhatsApp Image 2023-03-28 at 13.54.44 (3).webp"
import review7 from "./img/WhatsApp Image 2023-03-28 at 13.54.44 (2).webp"
import review8 from "./img/WhatsApp Image 2023-03-28 at 13.54.44 (1).webp"
import review9 from "./img/WhatsApp Image 2023-03-28 at 13.54.44.webp"
import review10 from "./img/WhatsApp Image 2023-03-28 at 13.54.43 (2).webp"
import review11 from "./img/WhatsApp Image 2023-03-28 at 13.54.43 (1).webp"
import review12 from "./img/WhatsApp Image 2023-03-28 at 13.54.43.webp"
import review13 from "./img/WhatsApp Image 2023-03-28 at 13.54.25.webp"
import review14 from "./img/WhatsApp Image 2023-03-28 at 13.54.26 (1).webp"
import review15 from "./img/WhatsApp Image 2023-03-28 at 13.54.45 (3).webp"
import review16 from "./img/WhatsApp Image 2023-03-28 at 13.55.26.webp"

const imgArr = [review1,review2,review3,review4,review5,review6,review7,review8,
  review9,review10,review11,review12,review13,review14,review15,review16,]

function Reviews() {

  useEffect(()=> {
    const element = document.getElementById('Отзывы');
    return element.scrollIntoView(false);
  },[])

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    addTPhoto("photo")
  }, [])

  const addTPhoto = (type)=>{
    const newArr = imgArr.map(el =>(
      {
        type: type,
        content: el
      })
    )
    setReviews(newArr);
  }

  const hidden = (id)=> {
    const imgId = document.getElementById(id);
    imgId.classList.toggle('show');
  }

  return (
    <main id="Отзывы" className="reviews__content">
      <h3 className="header-text">Отзывы наших клиентов</h3><br/>
      <div className='reviews__container'>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay, EffectCards, EffectCoverflow]}
        navigation={true}
        // effect="coverflow"
        grabCursor="true"
        centeredSlides="true"
        spaceBetween={0}
        slidesPerView={1}
        loop="true"
        pagination={{ clickable: true, dynamicBullets: true }}
        coverflowEffect={{
          rotate: 20,
          stretch: 25,
          depth: 250,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          700: {
            spaceBetween: 0,
            slidesPerView: 4,
          },
          500: {
            spaceBetween: 100,
            slidesPerView: 2,
          },
          411: {
            spaceBetween: 100,
            slidesPerView: 2,
          },
          300: {
            spaceBetween: 0,
            slidesPerView: 1,
          },
        }}
      >
        {reviews.map((review, index) =>
          <SwiperSlide key={index}>
            <div className={`review review__${review.type}`}>
              {review.type === 'text' && <p>{review.content}</p>}
              {review.type === 'photo' && <img src={review.content} onClick={()=>hidden(index)} id={index} alt="review photo"/>}
              {review.type === 'audio' && <audio src={review.content} controls />}
              {review.type === 'video' && <video src={review.content} controls />}
            </div>
          </SwiperSlide>
        )}
      </Swiper>
        </div>
    </main>
  );
}

export default Reviews;
