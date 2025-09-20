import { useDispatch } from 'react-redux';
import React from 'react';

const ProductCardComponent = ({ product }) => {
  const dispatch = useDispatch();
  const { image, name, description, price } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="price">${price}</div>
      <button
        onClick={() => {
          const action = { type: 'app/addToCart', payload: product };
          dispatch(action);
        }}
      >
        Добавить в корзину
      </button>
    </div>
  );
};

export const ProductCard = React.memo(ProductCardComponent);
