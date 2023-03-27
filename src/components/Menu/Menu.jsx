import React, {useEffect, useState} from 'react';
import './Menu.css'
import {Link} from "react-router-dom";

const Menu = ({header, active, setActive}) => {

  const servicesList = (arr) => (
    Object.entries(arr).map((item, index) => {
      return {
        id: index,
        categoryName: item[0],
        link: '',
        isSubMenu: false,
        subServices: item[1].map(el => (
          {
            servicesName: el,
            idList: index,
            // price: 100,
            // link: '',
          }
        ))
      }}
    )
  )

  const services = {
    "Эстетическая косметология": [
      "Ультразвуковая чистка",
      "Комбинированная чистка лица",
      "Гидропилинг",
      "Уход: Фарфоровая куколка",
      "Лазерный карбоновый пилинг",
      "Массаж лица",
      "RF лифтинг лица",
      "Элос эпиляция",
      "IPL лазер",
      "Коррекция акне/постакне",
      "Коррекция розация и сосудистых образований",
      "Удаление тату и татуажа"
    ],
    "Аппаратная коррекция фигуры": [
      "LPG",
      "Жиротоп (Microwave)",
      "Кавитация",
      "Миостимуляция",
      "Вакуумный массаж",
      "Лазерный липолиз",
      "Фотон терапия",
      "RF лифтинг по телу"
    ],
    "Массаж ручной": [
      "Коассически",
      "Лимфодренажный",
      "Антицеллюлитный"
    ]
  }

  const [selectedId, setSelectedId] = useState(null);

  console.log("servicesList",servicesList(services))

  return (
    <div className={active?"menu active":"menu"} onClick={()=>setActive(false)}>
      <div className="blur"/>
      <div className="menu__content" onClick={e=>e.stopPropagation()}>
        <div className="menu__header">{header}</div>
        {servicesList(services).map((item)=>
          <ul id = {item.id}>
            <a
              onClick={() => {
                if (selectedId === item.id) {
                  setSelectedId(null);
                } else {
                  setSelectedId(item.id)
                }
              }}
              className="list-item"  tabindex="1"
            >
              {item.categoryName}
              <i className="material-icons">send</i>
            </a>
            {item.subServices.map((el)=> {
              const currentClassName = selectedId === el.idList ? 'sub-menu__active' : 'sub-menu';

              return (
                  <li className={currentClassName}>
                    <a>{el.servicesName}</a>
                  </li>
                )
              }
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;
