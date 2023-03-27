import './services .css';
import ContactModal from "../contact_modal/ContactModal";
import React, {useState} from "react";
import Cards from "../card/Cards";

import product from "./product.webp"
import apparat from "./Appaeat__Technology (1).webp";
import massage from  "./massage (2).webp"
import mask from "./mask (1).webp"

const certificates = [{
  procedure: 'Эстетическая косметология',
  price: 10000,
  image: mask,
  description: "Биоревитализация.ГУБИЩИ.Биоревитализация.Очень полезно.Биоревитализация.Очень полезно."
},{
  procedure: 'Классический массаж',
  price: 10000,
  image: massage,
  description: "Биоревитализация.ОКАЙФ.Биоревитализация.Очень полезно.Биоревитализация.Очень полезно."
},{
  procedure: 'Аппаратный массаж',
  price: 10000,
  image: apparat,
  description: "Биоревитализация.Очень полезно.Биоревитализация.Очень полезно.Биоревитализация.Очень полезно."
},{
  procedure: 'Продукция',
  price: 10000,
  image:  product,
  description: "Биоревитализация.Очень БОЛЬНО.Биоревитализация.Очень полезно.Биоревитализация.Очень полезно."
}]

function Services(props) {

  return (
      <main className="services__content">
        <section className='cards__list'>
          <Cards arrData={certificates}/>
        </section>
      </main>
  );
}

export default Services;
