import React, {useEffect, useRef, useState} from 'react';
import './menu.css'
import {Link, Route} from 'react-router-dom';
// import logo from "src/components/header/logo.png"
const Menu = ({active, setActive, navName}) => {

  return (
    <div className={active?"menu active":"menu"} onClick={()=>setActive(false)}>
      <div className="blur"/>
      <div className="menu__content" onClick={e=>e.stopPropagation()}>
        <div className="menu__header">Soffi Clinic</div>
          <nav className="menu__nav">
            <ul>
              {navName.map((el,index)=>{
                return (
                  <a href={`#${el.patchName}`} style={{ color: 'yellow'}}>
                  <li key={index}>
                    <Link className="li__item" style={{ textDecoration: 'none' }}
                           key={index} to={el.patch}
                           onClick={()=>setActive(false)}
                    >
                        {el.patchName.toUpperCase()}
                        <i className="material-icons">send</i>
                    </Link>
                  </li>
                </a>

                )
              }
              )}
            </ul>
          </nav>
      </div>
    </div>
  );
};

export default Menu;
