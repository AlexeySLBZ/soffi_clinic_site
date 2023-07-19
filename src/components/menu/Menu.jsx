import React from 'react';
import './menu.css'
import {Link} from 'react-router-dom';
// import logo from "src/components/header/logo.png"
const Menu = ({active, setActive, navName}) => {

  function navElClick (atr){
    setActive(false)
  }

  return (
    <div className={active?"menu active":"menu"} onClick={()=>setActive(false)}>
      <div className="blur"/>
      <div className="menu__content" onClick={e=>e.stopPropagation()}>
        <div className="menu__header">Soffi Clinic</div>
          <nav className="menu__nav">
            <ul>
              {navName.map((el,index)=>{
                return (
                  <li key={index}>
                    <Link className="li__item"
                           key={index} to={el.patch}
                           onClick={()=>navElClick(el.patchName)}
                    >
                        {el.patchName.toUpperCase()}
                        <i className="material-icons">send</i>
                    </Link>
                  </li>
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
