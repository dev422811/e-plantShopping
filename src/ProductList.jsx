// ProductList.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="product-list">
      <h3>Total Items in Cart: {getTotalQuantity()}</h3>
      {products.map(product => (
        <div key={product.name} className="product">
          <img src={product.image} alt={product.name} />
          <h4>{product.name}</h4>
          <p>{product.cost}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;