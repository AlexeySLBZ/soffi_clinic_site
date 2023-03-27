import React, {useState} from 'react';
import {Link, Route} from 'react-router-dom';
import logo from "./logo.png";
import location from "./yandex_maps.png"
import "./header.css"
import ServiceButton from "../nav/ServiceButton";
import Menu from "../Menu/Menu";
import Social from "../social/Social";

function Header() {

  const [menuActive, setMenuActive]=useState(false)
  return (
    <header className="header">
        <div className='header__wrapper'>
           <Social className="social_content"/>
          <Link to="/">
            <img src={logo} style={{"height":"4.5rem"}} alt="Logo Soffi Cosmetology" className="header__logo" />
          </Link>
          <uddress className="contact__wrapper">
              <a href="tel:+79297072871" className="phone" itemProp="telephone" itemScope=""
               itemType="http://schema.org/PostalAddress">
                <span className="text-phone" itemProp="telephone">+7 929 707 28 71</span>
              </a>
              <div className="location_wrapper"
                >
                <a className={location}
                    href="https://yandex.ru/maps/51/samara/house/solnechnaya_ulitsa_20/YUkYdw9mTkIEQFtpfX51cHVqYA"
                    itemProp="address"
                    target="_blank"
                    itemType="http://schema.org/PostalAddress">
                  <img className="location-icon-image"  height="40px" src={location}></img>
                </a>
              </div>
          </uddress>
        </div>
        <nav className="header__nav">
          <ServiceButton
            active = {menuActive}
            setActive = {setMenuActive}
          />
          <Menu
            header = {"Наши услуги"}
            active = {menuActive}
            setActive = {setMenuActive}
          />
          <Link to="/homePage">Главная</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/video">Video</Link>
          <Link to="/shop">Магазин</Link>
          <Link to="/contacts">Контакты</Link>
          <Link to="/reviews">Отзывы</Link>
          <Link to="*">*</Link>
        </nav>
    </header>
  );
}


export default Header;
