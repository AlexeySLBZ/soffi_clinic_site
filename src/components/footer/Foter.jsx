import React, {useState} from "react"
import Reviews from "../reviews/Reviews";
import "./footer.css"
import ContactModal from "../contact_modal/ContactModal";

function Footer (){


  return(
    <mine className="footer__content">
      <section>
        <Reviews/>
      </section>
      <address>
        <a href="https://yandex.ru/maps/-/CCUzRWuI0D" itemProp="address" target="_blank"
           itemType="http://schema.org/PostalAddress">г.Самара ул. Солнечная д.20 оф. 307
        </a>
      </address>
    </mine>

  )
}

export default Footer;
