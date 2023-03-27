import React from 'react';
import "./card.css"


const Cards = ({arrData}) => {

  return (
    arrData.map((el)=> (
          <div className="card__wrapper">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img src={el.image} alt ='procedure'/>
              </div>
              <div className="card-content">
          <span className="card-title activator grey-text text-darken-4"><i
            className="material-icons right">more_vert</i></span>
                <p><a href="#">{el.procedure}</a></p>
              </div>
              <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            <i className="material-icons right">close</i></span>
                <p>{el.description}</p>
              </div>
            </div>
          </div>
        )
      )
  );
};

export default Cards;
