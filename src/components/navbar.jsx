import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.totalPrice);

  const cartCount = cart.length;

  return (
    <nav className="navbar">
      <div className="navbar-logo">Simply Natural</div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About us</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <a href="#cart">🛒 ${totalPrice.toFixed(2)}</a>
          {cartCount > 0 && (
            <span className="cart-count-badge">{cartCount}</span>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
