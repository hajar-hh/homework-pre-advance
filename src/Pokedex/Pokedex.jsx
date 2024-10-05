import React from 'react';
import Pokecard from './Pokecard'; 

const Pokedex = ({ pokemon }) => {
  return (
    <div className="pokedex">
      {pokemon.map((p) => (
        <Pokecard
          key={p.id}
          name={p.name}
          type={p.type}
          image={p.image}
        />
      ))}
    </div>
  );
};

export default Pokedex;
