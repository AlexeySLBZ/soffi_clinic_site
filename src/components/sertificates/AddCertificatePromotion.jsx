import React, { useState } from "react";
import "./addCertificatePromotion.css"

const AddCertificatePromotion = () => {
  const [certificates, setCertificates] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newCertificate = {
      price: formData.get('price'),
      procedure: formData.get('procedure'),
      description: formData.get('description'),
      expirationDate: formData.get('expirationDate')
    }
    setCertificates([...certificates, newCertificate]);
    e.target.reset();
  }

  return (
    <div>
      <form className="form__add__certificate" onSubmit={handleSubmit}>
        <label htmlFor="price">Price:</label>
        <input type="number" name="price" id="price" required />
        <br />
        <label htmlFor="procedure">Procedure:</label>
        <input type="text" name="procedure" id="procedure" required />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea name="description" id="description" required />
        <br />
        <label htmlFor="expirationDate">Expiration Date:</label>
        <input type="date" name="expirationDate" id="expirationDate" required />
        <br />
        <button type="submit">Add certificate/promotion</button>
      </form>
      <div>
        {certificates.map((certificate, index) => (
          <div key={index}>
            <p>Price: {certificate.price}</p>
            <p>Procedure: {certificate.procedure}</p>
            <p>Description: {certificate.description}</p>
            <p>Expiration Date: {certificate.expirationDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddCertificatePromotion;
