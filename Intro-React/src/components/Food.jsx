//Har samarbeidet med Jesper Borgersen
import React from 'react';

const Food = () => {
  const foods = ['Pizza', 'Hamburger', 'Carbonara'];
  return (
    <ul>
      {foods.map((food, index) => (
        <li key={index}> {food} </li>
      ))}
    </ul>
  );
};

export default Food;
