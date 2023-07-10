import React, {useEffect, useState} from "react"
import "./footer.css"
import ContactForm from "../contactForm/ContactForm";
import Social from "../social/Social";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";

function Footer (){

  // const socialVisible = document.documentElement.clientWidth <=600&&
  //   <Social className="social__content"/>

  useEffect(()=> {
    const element = document.getElementById('Контакты');
    return element.scrollIntoView(false);
  },[])

  return(
    <main id="Контакты" className="footer__content">
      <address>
        <div className="maps__content">
          <h5 className="header-text__footer">Контакты</h5>
            <YMaps>
              <Map className="map"
                   defaultState={{
                     center: [53.241994,50.186773],
                     zoom: 16,
                     controls: ["zoomControl", "fullscreenControl"],
                   }}
                   modules={["control.ZoomControl", "control.FullscreenControl"]}
              >
                <Placemark
                  modules={["geoObject.addon.balloon"]}
                  defaultGeometry={[53.241994,50.186773]}
                  properties={{
                    balloonContentBody:
                      `"Soffi Clinic" <br/> Косметология,  Массаж, Аппаратный Массаж`
                  }}
                />
              </Map>
            </YMaps>
            <br/>
        </div>
        <a className="header-text__footer" href="https://yandex.ru/maps/-/CCUHaWQnpB" itemProp="address" target="_blank"
           itemType="http://schema.org/PostalAddress">г.Самара ул. Солнечная д.20 оф. 307
        </a>
        <span><br/>
       <a href="tel:+79297072871" className="phone" itemProp="telephone" itemScope=""
               itemType="http://schema.org/PostalAddress">
      <span className="header-text__footer" itemProp="telephone">Тел: +7 929 707 28 71</span>
      </a><br/><br/>
     </span>
       <span className="header-text__footer">Мы в соцсетях:</span><br/>
        <Social className="social__content"/>
      </address>
      <section className="button__callback">
      </section>
      {/*<ContactForm/>*/}
        <p className="header-text__footer">© 2023 ООО "СОФФИ КЛИНИК", Все права защищены.</p>
      <span className="header-text__footer">
        Цены, указанные на сайте приведены как справочная информация и не являются публичной офертой, могут быть
        изменены в любое время без предупреждения. Для получения подробной информации о стоимости услуг обращайтесь в клинику.
        Имеются противопоказания. Фотографии услуг могут не соответствовать реальным услугам. Скидки не суммируются.
        Обращаясь за медицинской услугой,получите предварительную консультацию у наших специалистов и экспертов клиники. Вся
        информация, размещеннаяна этом сайте, носит исключительно ознакомительный характер и не может восприниматься как рекомендация
        к действиям.Определение диагноза и выбор методики лечения - прерогатива вашего лечащего врача. Наша клиника не несет
        ответственности за возможные негативные последствия, возникшие в результате использования информации, размещенной на сайте.
      </span>
    </main>

  )
}

export default Footer;
