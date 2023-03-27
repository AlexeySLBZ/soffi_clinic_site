import React from 'react';
import "./contacts.css"
import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps';
import Social from "../social/Social";

function Contacts(props) {

  return (
    <div className="contacts__content">
     <span>
       Тел: <a href="tel:+79297072871" className="phone" itemProp="telephone" itemScope=""
               itemType="http://schema.org/PostalAddress">
      <span className="text-phone" itemProp="telephone">+7 929 707 28 71</span>
      </a><br/>
     </span>
     <Social/>
     <address>
      Наш адрес: <a href="https://yandex.ru/maps/-/CCUzRWuI0D" itemProp="address" target="_blank"
           itemType="http://schema.org/PostalAddress">
       г.Самара ул. Солнечная д.20 оф. 307
     </a>
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
                     `"SoffiCosmetology" <br/> Косметология,  Массаж, Аппаратный Массаж`
                 }}
               />
             </Map>
         </YMaps>
       <br/>
     </address>
    </div>
  );
}

export default Contacts;
