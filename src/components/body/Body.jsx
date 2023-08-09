import {Route,Routes} from "react-router-dom";
import AddCertificatePromotion from "../sertificates/AddCertificatePromotion.jsx";
import HomePage from "../home_page/HomePage.jsx";
import Services from "../services/Services.jsx";
import Video from "../Video/Video.jsx";
import Account from "../services/Services.jsx";
import './body.css'
import Reviews from "../reviews/Reviews.jsx";
import React from "react";

function Body(){

 const ywibgetSettings = {
   buttonColor: '#1c84c6',
   buttonPosition: 'bottom right',
   buttonAutoShow: true,
   buttonText: 'Онлайн запись',
   formPosition: 'right'
 }

  return (
    <main className='body__content'>
      <div className="backgroundImg">
        <Routes>
          {/*Для администратора*/}
          <Route path="/certificatePromotion" elements={<AddCertificatePromotion/>}/>
          {/*Для клиента*/}
          <Route path="/*" element={<HomePage contact ="Главная"/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/video" element={<Video/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
          <Route path="/contacts" element={<HomePage contact ="Контакты"/>}/>
          <Route path="*" elements={<Account/>}/>
        </Routes>

      </div>
    </main>
  )
}

export default Body;
