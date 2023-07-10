import {Route,Routes} from "react-router-dom";
import AddCertificatePromotion from "../sertificates/AddCertificatePromotion";
import HomePage from "../home_page/HomePage";
import Services from "../services/Services";
import Video from "../Video/Video";
import Account from "../services/Services";
import './body.css'
import Reviews from "../reviews/Reviews";
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
          <Route path="/*" element={<HomePage/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/video" element={<Video/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
          {/*<Route path="/reviews" element={<Reviews/>}/>*/}
          <Route path="*" elements={<Account/>}/>
        </Routes>

      </div>
    </main>
  )
}

export default Body;
