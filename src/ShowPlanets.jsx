import React from "react";

const ShowPlanets = ({ planets }) => {
  return (
    <ul className="list-group m-5" style={{listStyleType : 'none',color:'rgb(110, 119, 33)'}}>
      {planets.map((planet, index) => (
        <li key={index} className="list-group-item">
          {planet}
        </li>
      ))}
    </ul>
  );
};

export default ShowPlanets;
