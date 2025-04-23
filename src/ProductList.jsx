import React from 'react';
import './ProductList.css';

function Product({ name, description, image, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2 className="psroduct-name">{name}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">₹{price}</p>
      <button className="buy-button">Buy Now</button>
    </div>
  );
}

export default Product;
