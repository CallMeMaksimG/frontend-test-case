import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductCardComponent = ({ product }) => {
  const dispatch = useDispatch();
  const { image, name, description, price } = product;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="price">${price}</div>
      <button onClick={handleAddToCart}>Добавить в корзину</button>
    </div>
  );
};

export const ProductCard = React.memo(ProductCardComponent);
