import React from 'react';

const animals = [
  { label: 'Horse' },
  { label: 'Turtle' },
  { label: 'Elephant' },
  { label: 'Monkey' },
];

const renderAnimal = (animal, index) => (
  <li key={index}>{animal.label}</li>
);

const RenderList = () => {
  return (
    <ul style={{listStyleType:'none',color:'rgb(194, 73, 17)'}}>
      {animals.map(renderAnimal)}
    </ul>
  );
};

export default RenderList;
