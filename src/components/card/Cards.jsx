import React from 'react';
import "./card.css"
import logo from "../header/logo.png";


const Cards = ({arrData}) => {

  const cardWrapper = document.documentElement.clientWidth > 600&&"card__wrapper"



  return (
    arrData.map((el,i)=> (
      <div key={i} className={cardWrapper}>
        <div className="card medium card__item">
          <div className="card-image waves-effect waves-block waves-light">
            <img src={el.image} alt ='procedure'/>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              <i className="small material-icons right">keyboard_arrow_up</i>
            </span>
            <p><a href="#">{el.procedure}</a></p>
            <div className="card__promo">{el.promo}</div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              <i className="small material-icons right">keyboard_arrow_down</i>
            </span>
            <i>{el.description}</i>
          </div>
        </div>
      </div>
      )
    )
  );
};

export default Cards;
