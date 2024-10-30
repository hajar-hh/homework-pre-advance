import React, { useState } from "react";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Card from "./components/card";
import products, { addModalMessage } from "./data";
import "./App.css";

function App() {
  const [modalMessages, setModalMessages] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className="card-container">
        {products.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            type={item.type}
            star={item.star}
            price={item.price}
            offPrice={item.offPrice}
            src={item.src}
            addModalMessage={(message) =>
              addModalMessage(setModalMessages, message)
            }
          />
        ))}
      </div>
      <div className="modal-container">
        {modalMessages.map((message, index) => (
          <div key={index} className="modal">
            <p>{message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
