import React, {useEffect, useState} from 'react';
import './promotions.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFlip } from 'swiper';

import lpg_body from './slide_lpg_body.webp';
import lpg_face from './Slide_LPG_Fase.webp';
import massage from './slide_massage1.webp';
import injection from './slide_injection.webp';
import sale from './slide_salle.webp';

import lpg_body_screen from './picture.webp'
import injection_screen from './m_injection.webp'
import lpg_face_screen from './apparat_face-_1_.webp'
import massage_screen from './massage_hend (1).webp'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-flip'


function Promotions () {

  const [promoOrient,setPromoOrient] = useState(window.innerWidth>window.innerHeight)

  const activeArr = () => {
    if (window.innerWidth>window.innerHeight) {
      setPromoOrient(true);
    } else {
      setPromoOrient(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", activeArr);
    return () => {
      window.removeEventListener("resize", activeArr);
    }
  }, [])

  const promoArrImg = (atr) => atr ? [lpg_body,lpg_face,massage,injection,]:
    [lpg_face_screen,lpg_body_screen,injection_screen,massage_screen];

  useEffect(() => {
    addPromo("promo")
  }, [promoOrient])


  const [promotions, setPromotions] = useState([]);

  const addPromo = (type) => {
    const newArr = promoArrImg(promoOrient).map(el => (
      {
        type: type,
        content: el
      })
    )
    setPromotions(newArr);
  }

  const showSlide = (id) => {
    const promoId = document.getElementById(id);
    promoId.classList.toggle('show');
  }

    return (
      <div className="promotions__content">
        <div className="promotions__container">
          <div className='swiper-slide'>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFlip]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              effect={"flip"}
              pagination={{clickable: true}}
              autoplay={{delay: 3000}}
              // scrollbar={{ draggable: true }}
              autoHeight={true}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log('slide change')}
            >
              {promotions.map((promo, index) =>
                <SwiperSlide key={index}>
                  <div className={`slide__${promo.type} slide-size`}>
                    {/*{promo.type === 'text' && <p>{promo.content}</p>}*/}
                    {promo.type === 'promo' && <img src={promo.content} onClick={() => showSlide(index)} id={index} alt="promo slide"/>}
                    {/*{promo.type === 'audio' && <audio src={promo.content} controls/>}*/}
                    {/*{promo.type === 'video' && <video src={promo.content} controls/>}*/}
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    );
  };


export default Promotions;
