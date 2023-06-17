import React, {useEffect, useState} from "react";
import "./contactModal.css"

const ContactModal = (topIndentation) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    phone: "Ваш телефон",
    name: "Ваше имя",
  });

  // const phone = useInput('', {isEmpty:true, isPhone: true,})

 // Вариант валидации 2
 //  function validPhone() {
 //    let re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
 //    let myPhone = document.getElementById('phone').value;
 //    let valid = re.test(myPhone);
 //    let output =""
 //    valid?  output = 'Номер телефона введен правильно!' : output = 'Номер телефона введен неправильно!';
 //    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
 //    return valid;
 //  }


  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Code to handle form submission goes here
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contactModal__content" style={topIndentation}>
      <button className="btn__callback" onClick={() => setModalOpen(true)} style={!modalOpen?
        {'display': "block"}:{'display': "none"}}>Перезвонить мне</button>
      {modalOpen && (
        <form id="form" className="form__callback" method="POST" onSubmit={handleFormSubmit}>
          <div>
            {/*Вариант 2 <p id="message" >Пожалуйста, заполните все поля формы!</p>*/}
            <label>
              Phone:
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="тфьу"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className="btn__wrapper">
            <a href="https://api.whatsapp.com/send?phone=79297072871" title="WhatsApp" target="_blank" rel="noopener">
            <button type="submit" className="btn__callback">
             Отправить
             <i className="material-icons right white-text">{"send"}</i>
            </button>
            </a>
            <button onClick={() => setModalOpen(false)} className="btn__callback">
              Закрыть
              <i className="smell material-icons right white-text">{"close"}</i>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactModal;
