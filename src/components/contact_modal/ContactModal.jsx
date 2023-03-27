import React, { useState } from "react";
import "./contactModal.css"

const ContactModal = (topIndentation) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    phone: "Ваш телефон",
    name: "Ваше имя",
  });

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
    <div style={topIndentation} className="contact" >
      <button className="callback__button" onClick={() => setModalOpen(true)} style={!modalOpen?
        {'display': "block"}:{'display': "none"}}>Перезвонить</button>
      {modalOpen && (
        <form className="form__callback" onSubmit={handleFormSubmit}>
          <div>
            <label>
              Phone:
              <input
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
          <div>
            <button type="submit" className="button__modal">Отправить</button>
            <button onClick={() => setModalOpen(false)} className="button__modal">Закрыть</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactModal;
