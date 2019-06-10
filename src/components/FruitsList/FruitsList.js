import React from "react";
import { simpleFruits } from "../../data/data";

const FruitList = () => (
  <ol>
    {simpleFruits.fruits.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ol>
);

export default FruitList;
