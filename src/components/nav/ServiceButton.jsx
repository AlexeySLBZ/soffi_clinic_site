import React from 'react';
import "./serviceButton.css"

function ServiceButton ({active, setActive}) {
  const icon = active?"expand_less":"expand_more"
  console.log("icon",icon)
  return (
          <button className={`serviceBtn ${icon}`} onClick={() => setActive(!active)}>
            Услуги
            <i className="large material-icons">{icon}</i>
          </button>
  );
}

export default ServiceButton ;
