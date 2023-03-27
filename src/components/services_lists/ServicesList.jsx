import React, { useState } from 'react';

import "./servicesList.css"
import Reviews from "../reviews/Reviews";
const ServicesList = () => {
  const [selected, setSelected] = useState(null);

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

  return (
    <div className="services__list" >
    <label htmlFor="select" className="for_label">УСЛУГИ</label>
       {/*<select onChange={(e) => setSelected(e.target.value)}>*/}
       <select id ="select">
         <option value="" disabled selected>Select a service</option>
          {Object.keys(services).map((key, index) => (
            <optgroup key={index} label={key}>
              {services[key].map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </optgroup>
          ))}
      </select>
      {selected && <p>Selected service: {selected}</p>}
    </div>
  );
};

export default ServicesList
