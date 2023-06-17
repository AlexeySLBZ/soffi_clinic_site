import React, {useState} from 'react';
import {Link, Route} from 'react-router-dom';
import logo from "./logo.png";
import location from "./logo_map.svg"
import phone_img from "./phone_img.png"
import "./header.css"
import ServiceButton from "../serviseButton/ServiceButton";
import Menu from "../menu/Menu";
import Social from "../social/Social";

function Header() {

  // const logoVisible = document.documentElement.clientWidth >=850?
  //    <img src={logo} alt="Logo Soffi Cosmetology" className="header__logo" />:<h5 className="header-text__footer">Soffi Clinic</h5>
  const socialVisible = document.documentElement.clientWidth >600&&
    <Social className="social__content"/>

  const [menuActive, setMenuActive]=useState(false)
  return (
    <header className="header">
      <div className='header__wrapper'>
          {socialVisible}
        <Link to="/">
          {/*{logoVisible}*/}
          <h2 className="header-text__logo">Soffi Clinic</h2>
        </Link>
        <address className="contact__wrapper">
          <i className="phone__btn">
            <a href="tel:+79297072871"
               itemProp="telephone"
               itemScope=""
               itemType="http://schema.org/PostalAddress">
              <img className="phone-icon-image" src={phone_img}></img>
              <span className="text__phone" itemProp="telephone">+7 929 707 28 71</span>
            </a>
          </i>
          <i className="location__btn">
            <a  href="https://yandex.ru/maps/-/CCUkbWBiGB"
                itemProp="address"
                target="_blank"
                itemType="http://schema.org/PostalAddress">
              <img className="location-icon-image" src={location}></img>
            </a>
          </i>
        </address>
        <ServiceButton className="contact__wrapper"
          active = {menuActive}
          setActive = {setMenuActive}
        />
        <Menu
          active = {menuActive}
          setActive = {setMenuActive}
        />

      </div>
        <nav className="header__nav">
          <Link to="/homePage">Главная</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/video">Video</Link>
          {/*<Link to="/shop">Магазин</Link>*/}
          <Link to="/reviews">Отзывы</Link>
          <Link to="/contacts">Контакты</Link>
          {/*<Link to="*">*</Link>*/}
        </nav>
    </header>
  );
}

export default Header;
