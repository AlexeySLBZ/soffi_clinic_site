import React from 'react';
import "./serviceButton.css"

function ServiceButton ({active, setActive}) {

  const burger = active?"close":"menu";
  const buttonActive = active?"serviceBtn":"serviceBtn serviceBtn-close"

  return (
          <button className={`${buttonActive}`} onClick={() => setActive(!active)}>
            <i style={{"margin":"0"}} className="small material-icons none white-text">{burger}</i>
          </button>
  );
}

export default ServiceButton;

