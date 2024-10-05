import React from 'react';

const Pokecard = ({ name, type, image }) => {
  return (
    <div className="pokecard">
      <h2 style={{color:'blue'}}>{name}</h2>
      <img src={image} alt={name} />
      <p style={{color:'black',fontSize:'20px'}}>Type: {type}</p>
    </div>
  );
};

export default Pokecard;
