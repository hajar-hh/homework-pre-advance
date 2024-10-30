import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../action";
import "../App.css";

function Card({ name, type, star, price, offPrice, src, addModalMessage }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart({ name, type, star, price, offPrice, src }));
    addModalMessage(`Added ${name} to cart!✔`);
  };

  return (
    <div className="card" onClick={handleAdd}>
      <img src={src} alt={name} className="card-image" />
      <div className="card-info">
        <h3>{name}</h3>
        <p>Type: {type}</p>
        <p>Rank: {"⭐".repeat(star)}</p>
        <p className="card-price">
          {offPrice ? (
            <>
              <span className="off-price">${offPrice}</span>
              <span className="price">${price}</span>
            </>
          ) : (
            <span>${price}</span>
          )}
        </p>
      </div>
    </div>
  );
}

export default Card;
