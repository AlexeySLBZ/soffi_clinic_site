import React from 'react';
import "./shop.css"
import Cards from "../card/Cards";

import product from "./product.webp"


const arrProducts = [{
  procedure: 'Эстетическая косметология',
  price: 10000,
  image: product,
  description: "Биоревитализация.ГУБИЩИ.Биоревитализация.Очень полезно.Биоревитализация.Очень полезно."
},{
  procedure: 'Классический массаж',
  price: 10000,
  image: product,
  description: "Биоревитализация.ОКАЙФ.Биоревитализация.Очень полезно.Биоревитализация.Очень полезно."
},{
  procedure: 'Аппаратный массаж',
  price: 10000,
  image: product,
  description: "Биоревитализация.Очень полезно.Биоревитализация.Очень полезно.Биоревитализация.Очень полезно."
},{
  procedure: 'Продукция',
  price: 10000,
  image:  product,
  description: "Биоревитализация.Очень БОЛЬНО.Биоревитализация.Очень полезно.Биоревитализация.Очень полезно."
}]


function Shop(props) {
  return (
    <main className="shop__content">
      <section className='cards__list'>
        <Cards arrData = {arrProducts}/>
      </section>
    </main>
  );

}

export default Shop;
