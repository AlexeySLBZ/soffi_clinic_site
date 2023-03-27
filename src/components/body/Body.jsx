import {Route, Routes} from "react-router-dom";
import AddCertificatePromotion from "../sertificates/AddCertificatePromotion";
import HomePage from "../home_page/HomePage";
import Services from "../services/Services";
import Video from "../Video/Video";
import Shop from "../shop/Shop";
import Contacts from "../contacts/Contacts";
import Reviews from "../reviews/Reviews";
import ContactModal from "../contact_modal/ContactModal";
import Account from "../services/Services";
import React, {useState} from "react";
import './body.css'

function Body(){

  const myVids = [
    "//www.w3schools.com/html/mov_bbb.mp4",
    "//www.w3schools.com/html/movie.mp4"
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className='body__content'>
      <div className="backgroundImg">
        <Routes>
          {/*Для администратора*/}
          <Route path="/certificatePromotion" elements={<AddCertificatePromotion/>}/>
          {/*Для клиента*/}
          <Route path="/homePage" element={<HomePage/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/video" element={<Video/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
          <Route path="*" elements={<Account/>}/>
        </Routes>
        <section className="button__callback">
          <ContactModal
            isOpen = {isOpen}
            setIsOpen={setIsOpen}
          />
        </section>
      </div>
    </main>
  )
}

export default Body;
