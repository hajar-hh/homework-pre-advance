import React from "react";
import "./App.css";

import Alert from "./Alert";
import Card from "./Card";
import RenderList from "./RenderList";

import ShowPlanets from "./ShowPlanets";
const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

function App() {
  return (
    <div>
      
      <div style={{color: 'purple',fontSize:'50px'}}>
      <Alert text="OMG! Something really bad has happened 🤦‍♀️" />
      </div>

      <br />
      <Card />

      <h2 style={{ color: "blue" }}>Animal List 🐱‍🚀</h2>
      <RenderList />

      <br />

      <div>
        <h2 style={{color : 'red'}}>List of Planets🧩 </h2>
        <ShowPlanets planets={planets} />
      </div>
    </div>
  );
}

export default App;
