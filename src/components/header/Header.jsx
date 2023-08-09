import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import location from "./logo_map.svg"
import phone_img from "./phone_img.png"
import "./header.css"
import ServiceButton from "../serviseButton/ServiceButton.jsx";
import Menu from "../menu/Menu.jsx";
import Social from "../social/Social.jsx";

function Header(setContactActive) {

  const navName = [
    {
      patch:"/homePage",
      patchName:"Главная",
    },
    {
      patch:"/services",
      patchName:"Услуги",
    },
    {
      patch:"/video",
      patchName:"Видео",
    },
    {
      patch:"/reviews",
      patchName:"Отзывы",
    },
    {
      patch:"/contacts",
      patchName:"Контакты",
    },
  ]

  // const [contacts, services, videos, reviews] = useRef(null)
  // const executeScroll = () => myRef.current.scrollIntoView()

  // const logoVisible = document.documentElement.clientWidth >=850?
  //    <img src={logo} alt="Logo Soffi Cosmetology" className="header__logo" />:<h5 className="header-text__footer">Soffi Clinic</h5>




  const [menuActive, setMenuActive]=useState(false)
  return (
    <header className="header">
      <div className='header__wrapper'>
        <div className="social__content">
          <Social/>
        </div>
        <Link to="/">
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
          navName={navName}
        />
      </div>
      <menu className="nav__wrapper">
        <ul className="header__nav">
          {navName.map((el,index)=>{
              return (
                  <li key={index}>
                    <Link key={index} to={el.patch}
                    >
                      {el.patchName.toUpperCase()}
                    </Link>
                  </li>
              )
            }
          )}
        </ul>
      </menu>
      {/*  <nav className="header__nav">*/}
      {/*    <Link to="/homePage">Главная</Link>*/}
      {/*    <Link to="/services">Услуги</Link>*/}
      {/*    <Link to="/video">Video</Link>*/}
      {/*    /!*<Link to="/shop">Магазин</Link>*!/*/}
      {/*    <Link to="/reviews">Отзывы</Link>*/}
      {/*    <a href="#contact">Контакты</a>*/}
      {/*    /!*<Link to="*">*</Link>*!/*/}
      {/*  </nav>*/}
    </header>
  );
}

export default Header;
